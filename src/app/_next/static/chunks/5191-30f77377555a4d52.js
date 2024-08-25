"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5191],
  {
    75191: function (e, t, a) {
      a.d(t, {
        s$: function () {
          return b;
        },
        $Z: function () {
          return w.RepeatButton;
        },
        P4: function () {
          return C.ShuffleButton;
        },
        WP: function () {
          return n.SonataControls;
        },
        ps: function () {
          return I;
        },
        RN: function () {
          return _;
        },
        B5: function () {
          return f;
        },
      });
      var n = a(78457);
      a(18143), a(80128);
      var i = a(24244),
        r = a(42288),
        o = a(84338),
        s = a(76894),
        c = a(87181),
        l = a(15419),
        u = a(31841),
        d = a(38360),
        v = a(33589),
        h = a(77070),
        y = a(44367);
      let f = (e) => {
          var t, a, n;
          switch (e.data.type) {
            case u.A4.Generative: {
              let a = e.data.meta,
                n = (0, y.Us)(null == a ? void 0 : a.derivedColors);
              return (0, r.pj)({
                id: String(a.id),
                coverUri: a.imageUrl,
                title: null !== (t = a.title) && void 0 !== t ? t : "",
                isAvailable: !0,
                isRemoved: !1,
                averageColor: n,
              });
            }
            case l.RX.Unloaded:
              return null;
            default: {
              let t = e.data.meta,
                i =
                  null === (a = t.artists) || void 0 === a
                    ? void 0
                    : a.map(v.d),
                o =
                  null === (n = t.albums) || void 0 === n ? void 0 : n.map(d.N);
              return (0, r.pj)({ ...(0, h.Ni)(t), artists: i, albums: o });
            }
          }
        },
        m = r.V5.model("UnloadedEntityMeta", {
          id: r.V5.union(r.V5.number, r.V5.string),
          albumId: r.V5.maybe(r.V5.union(r.V5.number, r.V5.string)),
        }),
        E = r.V5.model("UnloadedEntityData", {
          meta: m,
          type: r.V5.literal(l.RX.Unloaded),
        });
      var g = a(59131),
        p = a(94342);
      let b = h.yp
          .props({
            artists: r.V5.array(v.Go),
            albums: r.V5.array(d.KX),
            chart: r.V5.maybe(p.BH),
          })
          .views((e) => ({
            get idWithContext() {
              return e.albumId ? "".concat(e.id, ":").concat(e.albumId) : e.id;
            },
            get artistsNames() {
              var t;
              return null === (t = e.artists) || void 0 === t
                ? void 0
                : t.map((e) => e.name).join(", ");
            },
            get mainAlbum() {
              var a, n;
              return null !==
                (n = null === (a = e.albums) || void 0 === a ? void 0 : a[0]) &&
                void 0 !== n
                ? n
                : null;
            },
            get index() {
              var i, r, o;
              return null !==
                (o =
                  null === (r = e.albums[0]) || void 0 === r
                    ? void 0
                    : null === (i = r.trackPosition) || void 0 === i
                      ? void 0
                      : i.index) && void 0 !== o
                ? o
                : null;
            },
            get isPodcast() {
              var s;
              return (
                e.isTrackPodcast ||
                (null === (s = this.mainAlbum) || void 0 === s
                  ? void 0
                  : s.isPodcast)
              );
            },
            get isAudiobook() {
              return e.type === g.Vc.AUDIOBOOK;
            },
            get isNonMusic() {
              return this.isPodcast || this.isAudiobook;
            },
          })),
        I = r.V5.model("SonataState", {
          contextType: r.V5.maybeNull(r.V5.enumeration(Object.values(o.Ak))),
          contextId: r.V5.maybeNull(r.V5.string),
          entityMeta: r.V5.maybeNull(b),
          unloadedEntitiesData: r.V5.maybe(r.V5.array(E)),
          status: r.V5.enumeration(Object.values(l.Xz)),
          canMoveForward: r.V5.boolean,
          canMoveBackward: r.V5.boolean,
          canSpeed: r.V5.boolean,
          repeatMode: r.V5.enumeration(Object.values(c.zq)),
          canChangeRepeatMode: r.V5.boolean,
          volume: r.V5.maybe(r.V5.number),
          speed: r.V5.maybe(r.V5.number),
          canShuffle: r.V5.boolean,
          shuffle: r.V5.boolean,
          currentlyPlayingTrackIndex: r.V5.maybe(r.V5.number),
          quality: r.V5.enumeration(Object.values(s.nJ)),
        })
          .views((e) => ({
            get unloadedEntitiesDataFromModels() {
              return (0, i.ZN)(e.unloadedEntitiesData);
            },
            get isGenerativeContext() {
              return e.contextType === o.Ak.Generative;
            },
          }))
          .actions((e) => ({
            setContextId: (t) => {
              e.contextId = String(t);
            },
            setContextType: (t) => {
              e.contextType = t;
            },
            setEntityMeta: (t) => {
              t && t.data.meta && (e.entityMeta = f(t));
            },
            setUnloadedEntitiesData: (t) => {
              t && (e.unloadedEntitiesData = (0, r.pj)(t));
            },
            resetUnloadedEntitiesData: () => {
              e.unloadedEntitiesData = void 0;
            },
            setStatus: (t) => {
              e.status = t;
            },
            setCanMoveForward: (t) => {
              e.canMoveForward = t;
            },
            setCanMoveBackward: (t) => {
              e.canMoveBackward = t;
            },
            setVolume: (t) => {
              e.volume = t;
            },
            setCanSpeed: (t) => {
              e.canSpeed = t;
            },
            setSpeed: (t) => {
              e.speed = t;
            },
            setRepeatMode: (t) => {
              e.repeatMode = t;
            },
            setCanChangeRepeatMode: (t) => {
              e.canChangeRepeatMode = t;
            },
            setCanShuffle: (t) => {
              e.canShuffle = t;
            },
            setShuffle: (t) => {
              e.shuffle = t;
            },
            setCurrentlyPlayingTrackIndex: (t) => {
              e.currentlyPlayingTrackIndex = t;
            },
            setQuality: (t) => {
              e.quality = t;
            },
          })),
        _ = (e, t) => ({ type: l.RX.Unloaded, meta: { id: e, albumId: t } });
      var C = a(94975),
        w = a(99331);
    },
    76894: function (e, t, a) {
      a.d(t, {
        Tb: function () {
          return f;
        },
        gE: function () {
          return o;
        },
        Pg: function () {
          return y;
        },
        nJ: function () {
          return s;
        },
        sd: function () {
          return P;
        },
        $J: function () {
          return q;
        },
        Ez: function () {
          return M;
        },
      });
      var n,
        i,
        r,
        o,
        s,
        c,
        l = a(8655),
        u = a(59131);
      async function d(e) {
        let { secretKey: t, data: a } = e,
          n = new TextEncoder(),
          i = n.encode(t);
        return crypto.subtle
          .importKey(
            "raw",
            i,
            { name: "HMAC", hash: { name: "SHA-256" } },
            !0,
            ["sign", "verify"],
          )
          .then(async (e) => {
            let t = n.encode(a);
            return crypto.subtle
              .sign("HMAC", e, t)
              .then((e) =>
                btoa(String.fromCharCode(...new Uint8Array(e))).slice(0, -1),
              );
          });
      }
      function v() {
        return Math.floor(Date.now() / 1e3);
      }
      var h = a(37810);
      class y extends h.y {
        constructor(e, { code: t = "E_MEDIA_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, l._)(this, "name", "MediaProviderException"),
            Object.setPrototypeOf(this, y.prototype);
        }
      }
      class f extends y {
        constructor(
          e,
          { code: t = "E_DOWNLOADINFO_MEDIA_PROVIDER", ...a } = {},
        ) {
          super(e, { code: t, ...a }),
            (0, l._)(this, "name", "DownloadInfoMediaProviderException"),
            Object.setPrototypeOf(this, f.prototype);
        }
      }
      let m = {
        lossless: [{ codec: u.V9.FLAC, bitrateInKbps: 0 }],
        hq: [{ codec: u.V9.MP3, bitrateInKbps: 320 }],
        nq: [
          { codec: u.V9.AAC, bitrateInKbps: 128 },
          { codec: u.V9.MP3, bitrateInKbps: 192 },
        ],
        lq: [
          { codec: u.V9.AAC, bitrateInKbps: 128 },
          { codec: u.V9.MP3, bitrateInKbps: 192 },
        ],
        preview: [{ codec: u.V9.MP3, bitrateInKbps: 128 }],
        smart_preview: [{ codec: u.V9.MP3, bitrateInKbps: 128 }],
      };
      function E(e) {
        return e instanceof Error
          ? { name: e.name, message: e.message, stack: e.stack, cause: e.cause }
          : { data: e };
      }
      ((n = o || (o = {})).E_GET_MEDIA_SRC = "E_GET_MEDIA_SRC"),
        (n.E_CREATE_SIGN = "E_CREATE_SIGN"),
        (n.E_UNSUITABLE_ENTITY_TYPE = "E_UNSUITABLE_ENTITY_TYPE");
      class g {
        getMediaSource(e) {
          return new Promise((t, a) => {
            let {
                entity: {
                  data: {
                    meta: { id: n },
                  },
                },
              } = e,
              i = v();
            d({ secretKey: this.secretKey, data: "".concat(i).concat(n) })
              .then((e) => {
                this.resource
                  .getStorageData({
                    trackId: String(n),
                    sign: e,
                    tsInSeconds: i,
                    canUseStreaming: !1,
                    direct: !1,
                    requireMp3Link: !1,
                    isAliceRequester: !1,
                    preview:
                      this.mediaConfigController.qualityConfig.preview.value,
                  })
                  .then((e) => {
                    let i = (function (e, t) {
                      if (t.preview.value && e[0]) return e[0];
                      let a = e.find((e) =>
                          m.lossless.find((t) => e.codec === t.codec),
                        ),
                        n = e.find((e) =>
                          m.hq.find(
                            (t) =>
                              e.codec === t.codec &&
                              e.bitrateInKbps === t.bitrateInKbps,
                          ),
                        ),
                        i = e.find((e) =>
                          m.nq.find(
                            (t) =>
                              e.codec === t.codec &&
                              e.bitrateInKbps === t.bitrateInKbps,
                          ),
                        );
                      return t.lossless.value && a
                        ? a
                        : t.hq.value && n
                          ? n
                          : (t.lq.value || t.nq.value) && i
                            ? i
                            : null;
                    })(e, this.mediaConfigController.qualityConfig);
                    null !== i
                      ? this.resource
                          .getSrcData({ storageUrl: i.downloadInfoUrl })
                          .then((e) => {
                            try {
                              let a = (function (e) {
                                let {
                                    srcData: t,
                                    secretKey: a,
                                    trackId: n,
                                  } = e,
                                  i = (function (e, t) {
                                    let a, n, i, r, o, s, c, l, u;
                                    let d = String.fromCharCode;
                                    function v(e, t) {
                                      return (e << t) | (e >>> (32 - t));
                                    }
                                    function h(e, t) {
                                      let a, n, i, r, o;
                                      return ((i = 2147483648 & e),
                                      (r = 2147483648 & t),
                                      (a = 1073741824 & e),
                                      (n = 1073741824 & t),
                                      (o = (1073741823 & e) + (1073741823 & t)),
                                      a & n)
                                        ? 2147483648 ^ o ^ i ^ r
                                        : a | n
                                          ? 1073741824 & o
                                            ? 3221225472 ^ o ^ i ^ r
                                            : 1073741824 ^ o ^ i ^ r
                                          : o ^ i ^ r;
                                    }
                                    function y(e, t, a, n, i, r, o) {
                                      return (
                                        (e = h(
                                          e,
                                          h(h((t & a) | (~t & n), i), o),
                                        )),
                                        h(v(e, r), t)
                                      );
                                    }
                                    function f(e, t, a, n, i, r, o) {
                                      return (
                                        (e = h(
                                          e,
                                          h(h((t & n) | (a & ~n), i), o),
                                        )),
                                        h(v(e, r), t)
                                      );
                                    }
                                    function m(e, t, a, n, i, r, o) {
                                      return (
                                        (e = h(e, h(h(t ^ a ^ n, i), o))),
                                        h(v(e, r), t)
                                      );
                                    }
                                    function E(e, t, a, n, i, r, o) {
                                      return (
                                        (e = h(e, h(h(a ^ (t | ~n), i), o))),
                                        h(v(e, r), t)
                                      );
                                    }
                                    function g(e) {
                                      let t = "",
                                        a = "",
                                        n,
                                        i;
                                      for (i = 0; i <= 3; i++)
                                        (n = (e >>> (8 * i)) & 255),
                                          (t += (a = "0".concat(
                                            n.toString(16),
                                          )).substr(a.length - 2, 2));
                                      return t;
                                    }
                                    let p = [];
                                    for (
                                      a = 0,
                                        p = (function (e) {
                                          let t;
                                          let a = e.length,
                                            n = a + 8,
                                            i = ((n - (n % 64)) / 64 + 1) * 16,
                                            r = Array(i - 1),
                                            o = 0,
                                            s = 0;
                                          for (; s < a; )
                                            (t = (s - (s % 4)) / 4),
                                              (o = (s % 4) * 8),
                                              (r[t] =
                                                r[t] | (e.charCodeAt(s) << o)),
                                              s++;
                                          return (
                                            (t = (s - (s % 4)) / 4),
                                            (o = (s % 4) * 8),
                                            (r[t] = r[t] | (128 << o)),
                                            (r[i - 2] = a << 3),
                                            (r[i - 1] = a >>> 29),
                                            r
                                          );
                                        })(
                                          (e = (function (e) {
                                            e = t + e.replace(/\r\n/g, "\n");
                                            let a = "";
                                            for (let t = 0; t < e.length; t++) {
                                              let n = e.charCodeAt(t);
                                              n < 128
                                                ? (a += d(n))
                                                : n > 127 && n < 2048
                                                  ? (a +=
                                                      d((n >> 6) | 192) +
                                                      d((63 & n) | 128))
                                                  : (a +=
                                                      d((n >> 12) | 224) +
                                                      d(((n >> 6) & 63) | 128) +
                                                      d((63 & n) | 128));
                                            }
                                            return a;
                                          })(e)),
                                        ),
                                        s = 1732584193,
                                        c = 4023233417,
                                        l = 2562383102,
                                        u = 271733878;
                                      a < p.length;
                                      a += 16
                                    )
                                      (n = s),
                                        (i = c),
                                        (r = l),
                                        (o = u),
                                        (s = y(
                                          s,
                                          c,
                                          l,
                                          u,
                                          p[a + 0],
                                          7,
                                          3614090360,
                                        )),
                                        (u = y(
                                          u,
                                          s,
                                          c,
                                          l,
                                          p[a + 1],
                                          12,
                                          3905402710,
                                        )),
                                        (l = y(
                                          l,
                                          u,
                                          s,
                                          c,
                                          p[a + 2],
                                          17,
                                          606105819,
                                        )),
                                        (c = y(
                                          c,
                                          l,
                                          u,
                                          s,
                                          p[a + 3],
                                          22,
                                          3250441966,
                                        )),
                                        (s = y(
                                          s,
                                          c,
                                          l,
                                          u,
                                          p[a + 4],
                                          7,
                                          4118548399,
                                        )),
                                        (u = y(
                                          u,
                                          s,
                                          c,
                                          l,
                                          p[a + 5],
                                          12,
                                          1200080426,
                                        )),
                                        (l = y(
                                          l,
                                          u,
                                          s,
                                          c,
                                          p[a + 6],
                                          17,
                                          2821735955,
                                        )),
                                        (c = y(
                                          c,
                                          l,
                                          u,
                                          s,
                                          p[a + 7],
                                          22,
                                          4249261313,
                                        )),
                                        (s = y(
                                          s,
                                          c,
                                          l,
                                          u,
                                          p[a + 8],
                                          7,
                                          1770035416,
                                        )),
                                        (u = y(
                                          u,
                                          s,
                                          c,
                                          l,
                                          p[a + 9],
                                          12,
                                          2336552879,
                                        )),
                                        (l = y(
                                          l,
                                          u,
                                          s,
                                          c,
                                          p[a + 10],
                                          17,
                                          4294925233,
                                        )),
                                        (c = y(
                                          c,
                                          l,
                                          u,
                                          s,
                                          p[a + 11],
                                          22,
                                          2304563134,
                                        )),
                                        (s = y(
                                          s,
                                          c,
                                          l,
                                          u,
                                          p[a + 12],
                                          7,
                                          1804603682,
                                        )),
                                        (u = y(
                                          u,
                                          s,
                                          c,
                                          l,
                                          p[a + 13],
                                          12,
                                          4254626195,
                                        )),
                                        (l = y(
                                          l,
                                          u,
                                          s,
                                          c,
                                          p[a + 14],
                                          17,
                                          2792965006,
                                        )),
                                        (c = y(
                                          c,
                                          l,
                                          u,
                                          s,
                                          p[a + 15],
                                          22,
                                          1236535329,
                                        )),
                                        (s = f(
                                          s,
                                          c,
                                          l,
                                          u,
                                          p[a + 1],
                                          5,
                                          4129170786,
                                        )),
                                        (u = f(
                                          u,
                                          s,
                                          c,
                                          l,
                                          p[a + 6],
                                          9,
                                          3225465664,
                                        )),
                                        (l = f(
                                          l,
                                          u,
                                          s,
                                          c,
                                          p[a + 11],
                                          14,
                                          643717713,
                                        )),
                                        (c = f(
                                          c,
                                          l,
                                          u,
                                          s,
                                          p[a + 0],
                                          20,
                                          3921069994,
                                        )),
                                        (s = f(
                                          s,
                                          c,
                                          l,
                                          u,
                                          p[a + 5],
                                          5,
                                          3593408605,
                                        )),
                                        (u = f(
                                          u,
                                          s,
                                          c,
                                          l,
                                          p[a + 10],
                                          9,
                                          38016083,
                                        )),
                                        (l = f(
                                          l,
                                          u,
                                          s,
                                          c,
                                          p[a + 15],
                                          14,
                                          3634488961,
                                        )),
                                        (c = f(
                                          c,
                                          l,
                                          u,
                                          s,
                                          p[a + 4],
                                          20,
                                          3889429448,
                                        )),
                                        (s = f(
                                          s,
                                          c,
                                          l,
                                          u,
                                          p[a + 9],
                                          5,
                                          568446438,
                                        )),
                                        (u = f(
                                          u,
                                          s,
                                          c,
                                          l,
                                          p[a + 14],
                                          9,
                                          3275163606,
                                        )),
                                        (l = f(
                                          l,
                                          u,
                                          s,
                                          c,
                                          p[a + 3],
                                          14,
                                          4107603335,
                                        )),
                                        (c = f(
                                          c,
                                          l,
                                          u,
                                          s,
                                          p[a + 8],
                                          20,
                                          1163531501,
                                        )),
                                        (s = f(
                                          s,
                                          c,
                                          l,
                                          u,
                                          p[a + 13],
                                          5,
                                          2850285829,
                                        )),
                                        (u = f(
                                          u,
                                          s,
                                          c,
                                          l,
                                          p[a + 2],
                                          9,
                                          4243563512,
                                        )),
                                        (l = f(
                                          l,
                                          u,
                                          s,
                                          c,
                                          p[a + 7],
                                          14,
                                          1735328473,
                                        )),
                                        (c = f(
                                          c,
                                          l,
                                          u,
                                          s,
                                          p[a + 12],
                                          20,
                                          2368359562,
                                        )),
                                        (s = m(
                                          s,
                                          c,
                                          l,
                                          u,
                                          p[a + 5],
                                          4,
                                          4294588738,
                                        )),
                                        (u = m(
                                          u,
                                          s,
                                          c,
                                          l,
                                          p[a + 8],
                                          11,
                                          2272392833,
                                        )),
                                        (l = m(
                                          l,
                                          u,
                                          s,
                                          c,
                                          p[a + 11],
                                          16,
                                          1839030562,
                                        )),
                                        (c = m(
                                          c,
                                          l,
                                          u,
                                          s,
                                          p[a + 14],
                                          23,
                                          4259657740,
                                        )),
                                        (s = m(
                                          s,
                                          c,
                                          l,
                                          u,
                                          p[a + 1],
                                          4,
                                          2763975236,
                                        )),
                                        (u = m(
                                          u,
                                          s,
                                          c,
                                          l,
                                          p[a + 4],
                                          11,
                                          1272893353,
                                        )),
                                        (l = m(
                                          l,
                                          u,
                                          s,
                                          c,
                                          p[a + 7],
                                          16,
                                          4139469664,
                                        )),
                                        (c = m(
                                          c,
                                          l,
                                          u,
                                          s,
                                          p[a + 10],
                                          23,
                                          3200236656,
                                        )),
                                        (s = m(
                                          s,
                                          c,
                                          l,
                                          u,
                                          p[a + 13],
                                          4,
                                          681279174,
                                        )),
                                        (u = m(
                                          u,
                                          s,
                                          c,
                                          l,
                                          p[a + 0],
                                          11,
                                          3936430074,
                                        )),
                                        (l = m(
                                          l,
                                          u,
                                          s,
                                          c,
                                          p[a + 3],
                                          16,
                                          3572445317,
                                        )),
                                        (c = m(
                                          c,
                                          l,
                                          u,
                                          s,
                                          p[a + 6],
                                          23,
                                          76029189,
                                        )),
                                        (s = m(
                                          s,
                                          c,
                                          l,
                                          u,
                                          p[a + 9],
                                          4,
                                          3654602809,
                                        )),
                                        (u = m(
                                          u,
                                          s,
                                          c,
                                          l,
                                          p[a + 12],
                                          11,
                                          3873151461,
                                        )),
                                        (l = m(
                                          l,
                                          u,
                                          s,
                                          c,
                                          p[a + 15],
                                          16,
                                          530742520,
                                        )),
                                        (c = m(
                                          c,
                                          l,
                                          u,
                                          s,
                                          p[a + 2],
                                          23,
                                          3299628645,
                                        )),
                                        (s = E(
                                          s,
                                          c,
                                          l,
                                          u,
                                          p[a + 0],
                                          6,
                                          4096336452,
                                        )),
                                        (u = E(
                                          u,
                                          s,
                                          c,
                                          l,
                                          p[a + 7],
                                          10,
                                          1126891415,
                                        )),
                                        (l = E(
                                          l,
                                          u,
                                          s,
                                          c,
                                          p[a + 14],
                                          15,
                                          2878612391,
                                        )),
                                        (c = E(
                                          c,
                                          l,
                                          u,
                                          s,
                                          p[a + 5],
                                          21,
                                          4237533241,
                                        )),
                                        (s = E(
                                          s,
                                          c,
                                          l,
                                          u,
                                          p[a + 12],
                                          6,
                                          1700485571,
                                        )),
                                        (u = E(
                                          u,
                                          s,
                                          c,
                                          l,
                                          p[a + 3],
                                          10,
                                          2399980690,
                                        )),
                                        (l = E(
                                          l,
                                          u,
                                          s,
                                          c,
                                          p[a + 10],
                                          15,
                                          4293915773,
                                        )),
                                        (c = E(
                                          c,
                                          l,
                                          u,
                                          s,
                                          p[a + 1],
                                          21,
                                          2240044497,
                                        )),
                                        (s = E(
                                          s,
                                          c,
                                          l,
                                          u,
                                          p[a + 8],
                                          6,
                                          1873313359,
                                        )),
                                        (u = E(
                                          u,
                                          s,
                                          c,
                                          l,
                                          p[a + 15],
                                          10,
                                          4264355552,
                                        )),
                                        (l = E(
                                          l,
                                          u,
                                          s,
                                          c,
                                          p[a + 6],
                                          15,
                                          2734768916,
                                        )),
                                        (c = E(
                                          c,
                                          l,
                                          u,
                                          s,
                                          p[a + 13],
                                          21,
                                          1309151649,
                                        )),
                                        (s = E(
                                          s,
                                          c,
                                          l,
                                          u,
                                          p[a + 4],
                                          6,
                                          4149444226,
                                        )),
                                        (u = E(
                                          u,
                                          s,
                                          c,
                                          l,
                                          p[a + 11],
                                          10,
                                          3174756917,
                                        )),
                                        (l = E(
                                          l,
                                          u,
                                          s,
                                          c,
                                          p[a + 2],
                                          15,
                                          718787259,
                                        )),
                                        (c = E(
                                          c,
                                          l,
                                          u,
                                          s,
                                          p[a + 9],
                                          21,
                                          3951481745,
                                        )),
                                        (s = h(s, n)),
                                        (c = h(c, i)),
                                        (l = h(l, r)),
                                        (u = h(u, o));
                                    return (
                                      g(s) +
                                      g(c) +
                                      g(l) +
                                      g(u)
                                    ).toLowerCase();
                                  })(t.path.substr(1) + t.s, a),
                                  r = "/get-mp3/"
                                    .concat(i, "/")
                                    .concat(t.ts)
                                    .concat(t.path, "?track-id=")
                                    .concat(n, "&play=false");
                                return "https://".concat(t.host).concat(r);
                              })({
                                trackId: n,
                                srcData: e,
                                secretKey: this.secretKey,
                              });
                              t(a);
                            } catch (e) {
                              a(
                                new f("Failed to create src link", {
                                  code: o.E_GET_MEDIA_SRC,
                                  cause: e,
                                  data: { trackId: n, causeAsObject: E(e) },
                                }),
                              );
                            }
                          })
                          .catch((e) => {
                            a(
                              new f("Failed to get src data", {
                                code: o.E_GET_MEDIA_SRC,
                                cause: e,
                                data: { trackId: n, causeAsObject: E(e) },
                              }),
                            );
                          })
                      : a(
                          new f("No storage url for entity", {
                            code: o.E_GET_MEDIA_SRC,
                          }),
                        );
                  })
                  .catch((e) => {
                    a(
                      new f("Failed to get storage data", {
                        code: o.E_GET_MEDIA_SRC,
                        cause: e,
                        data: { trackId: n, causeAsObject: E(e) },
                      }),
                    );
                  });
              })
              .catch((e) => {
                a(
                  new f("Failed to create sign", {
                    code: o.E_CREATE_SIGN,
                    cause: e,
                    data: { trackId: n, causeAsObject: E(e) },
                  }),
                );
              });
          });
        }
        constructor(e) {
          (0, l._)(this, "secretKey", void 0),
            (0, l._)(this, "resource", void 0),
            (0, l._)(this, "mediaConfigController", void 0);
          let {
            httpClient: t,
            resourceConfig: a,
            secretKey: n,
            mediaConfigController: i,
          } = e;
          (this.resource = new u.HZ(t, {
            params: a.params,
            gateway: a.gateway,
            overembed: a.overembed,
            externalDomain: a.externalDomain,
            retryPolicyConfig: a.retryPolicyConfig,
            timeouts: a.timeouts,
          })),
            (this.mediaConfigController = i),
            (this.secretKey = n);
        }
      }
      var p = a(31841);
      ((i = s || (s = {})).HQ_PLUS = "hqPlus"),
        (i.HQ = "hq"),
        (i.NQ = "nq"),
        (i.LQ = "lq"),
        (i.PREVIEW = "preview");
      class b extends y {
        constructor(
          e,
          { code: t = "E_GET_FILE_INFO_MEDIA_PROVIDER", ...a } = {},
        ) {
          super(e, { code: t, ...a }),
            (0, l._)(this, "name", "GetFileInfoMediaProviderException"),
            Object.setPrototypeOf(this, b.prototype);
        }
      }
      let I = [u.V9.FLAC, u.V9.AAC, u.V9.HEAAC, u.V9.MP3];
      class _ {
        getMediaSource(e) {
          let t = v(),
            a = (function (e, t, a) {
              if ((0, p.YM)(t)) return u.nJ.SMART_PREVIEW;
              let n = a ? u.nJ.LQ : u.nJ.NQ;
              switch (e) {
                case s.HQ_PLUS:
                  n = u.nJ.LOSSLESS;
                  break;
                case s.HQ:
                  n = a ? u.nJ.NQ : u.nJ.HQ;
                  break;
                case s.NQ:
                case s.LQ:
                  n = a ? u.nJ.LQ : u.nJ.NQ;
                  break;
                case s.PREVIEW:
                  n = u.nJ.PREVIEW;
              }
              return n;
            })(
              this.mediaConfigController.quality.value,
              e.entity,
              this.variables.useNewCorrespondenceBetweenQualityParams,
            ),
            n = I.join(""),
            i = ""
              .concat(t)
              .concat(e.entity.data.meta.id)
              .concat(a)
              .concat(n)
              .concat(this.transport);
          return new Promise((r, s) => {
            d({ data: i, secretKey: this.secretKey })
              .then((i) =>
                this.resource
                  .getFileInfo({
                    tsInSeconds: t,
                    trackId: e.entity.data.meta.id,
                    quality: a,
                    codecs: I,
                    transports: [this.transport],
                    sign: i,
                  })
                  .then((t) => {
                    var i;
                    (
                      null === (i = t.downloadInfo.urls) || void 0 === i
                        ? void 0
                        : i[0]
                    )
                      ? ((e.entity.mediaSource = t), r(t.downloadInfo.urls[0]))
                      : s(
                          new b("Empty urls in get-file-info response", {
                            code: o.E_GET_MEDIA_SRC,
                            data: {
                              trackId: e.entity.data.meta.id,
                              quality: a,
                              codecs: n,
                              mediaSource: t,
                            },
                          }),
                        );
                  })
                  .catch((t) => {
                    s(
                      new b("Error in get-file-info request", {
                        code: o.E_GET_MEDIA_SRC,
                        cause: t,
                        data: {
                          trackId: e.entity.data.meta.id,
                          quality: a,
                          codecs: n,
                          causeAsObject: E(t),
                        },
                      }),
                    );
                  }),
              )
              .catch((t) => {
                s(
                  new b("Error in creating sign for get-file-info request", {
                    code: o.E_CREATE_SIGN,
                    cause: t,
                    data: {
                      trackId: e.entity.data.meta.id,
                      quality: a,
                      codecs: n,
                      causeAsObject: E(t),
                    },
                  }),
                );
              });
          });
        }
        constructor(e) {
          (0, l._)(this, "secretKey", void 0),
            (0, l._)(this, "resource", void 0),
            (0, l._)(this, "mediaConfigController", void 0),
            (0, l._)(this, "transport", void 0),
            (0, l._)(this, "variables", void 0);
          let {
            httpClient: t,
            resourceConfig: a,
            secretKey: n,
            mediaConfigController: i,
            transport: r,
            variables: o,
          } = e;
          (this.resource = new u.dF(t, {
            params: a.params,
            gateway: a.gateway,
          })),
            (this.secretKey = n),
            (this.mediaConfigController = i),
            (this.transport = r),
            (this.variables = o);
        }
      }
      class C extends h.y {
        constructor(e, { code: t = "E_YAMUSIC_ENTITY_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, l._)(this, "name", "YaMusicEntityProviderException"),
            Object.setPrototypeOf(this, C.prototype);
        }
      }
      var w = a(84338);
      class P {
        async loadEntities(e) {
          let t = e.map((e) => {
            let { context: t, entity: a } = e;
            return (0, w.m3)(t)
              ? "".concat(a.data.meta.id, ":").concat(t.data.meta.id)
              : (0, w.KT)(t) && "albumId" in a.data.meta && a.data.meta.albumId
                ? "".concat(a.data.meta.id, ":").concat(a.data.meta.albumId)
                : a.data.meta.id;
          });
          return this.resource
            .getTracksMeta({ trackIds: t, withProgress: !0 })
            .then((e) => {
              let t = [];
              for (let a of e) t.push({ type: p.A4.Unknown, meta: a });
              return t;
            })
            .catch((e) => {
              throw new C("Failed to get entities meta", { cause: E(e) });
            });
        }
        constructor(e) {
          (0, l._)(this, "resource", void 0);
          let { httpClient: t, config: a } = e;
          this.resource = new u.HZ(t, {
            params: a.params,
            gateway: a.gateway,
            retryPolicyConfig: a.retryPolicyConfig,
            timeouts: a.timeouts,
          });
        }
      }
      var V = a(80789);
      class q {
        setQuality(e) {
          switch (e) {
            case s.HQ_PLUS:
              (this.qualityConfig.lossless.value = !0),
                (this.qualityConfig.hq.value = !0),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = s.HQ_PLUS);
              break;
            case s.HQ:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !0),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = s.HQ);
              break;
            case s.NQ:
            case s.LQ:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !1),
                (this.qualityConfig.nq.value = !0),
                (this.qualityConfig.lq.value = !0),
                (this.qualityConfig.preview.value = !1),
                (this.quality.value = s.NQ);
              break;
            case s.PREVIEW:
              (this.qualityConfig.lossless.value = !1),
                (this.qualityConfig.hq.value = !1),
                (this.qualityConfig.nq.value = !1),
                (this.qualityConfig.lq.value = !1),
                (this.qualityConfig.preview.value = !0),
                (this.quality.value = s.PREVIEW);
          }
        }
        constructor(e) {
          (0, l._)(this, "qualityConfig", {
            lossless: new V.wi(!1),
            hq: new V.wi(!0),
            nq: new V.wi(!0),
            lq: new V.wi(!0),
            preview: new V.wi(!0),
            smart_preview: new V.wi(!1),
          }),
            (0, l._)(this, "quality", new V.wi(s.HQ)),
            this.setQuality(e);
        }
      }
      ((r = c || (c = {})).DOWNLOAD_INFO_PROVIDER = "downloadInfoProvider"),
        (r.GET_FILE_INFO_PROVIDER = "getFileInfoProvider");
      class S extends y {
        constructor(e, { code: t = "E_GENERATIVE_MEDIA_PROVIDER", ...a } = {}) {
          super(e, { code: t, ...a }),
            (0, l._)(this, "name", "GenerativeMediaProviderException"),
            Object.setPrototypeOf(this, S.prototype);
        }
      }
      class A {
        async getMediaSource(e) {
          return (0, p.OX)(e.entity)
            ? this.getGenerativeSrc(e.entity.data)
            : new Promise((e, t) => {
                t(
                  new S("Provided entity is not generative entity", {
                    code: o.E_UNSUITABLE_ENTITY_TYPE,
                  }),
                );
              });
        }
        async getGenerativeSrc(e) {
          return new Promise((t, a) => {
            var n;
            (null === (n = e.meta.stream) || void 0 === n ? void 0 : n.url)
              ? t(e.meta.stream.url)
              : a(
                  new S("Failed to create generative src link", {
                    code: o.E_GET_MEDIA_SRC,
                  }),
                );
          });
        }
      }
      class M {
        async getMediaSource(e) {
          return (0, p.OX)(e.entity)
            ? this.generativeProvider.getMediaSource(e)
            : (this.variables.switchToStrmWithoutEncrypt
                ? this.getFileInfoProvider
                : this.downloadInfoProvider
              ).getMediaSource(e);
        }
        constructor(e) {
          (0, l._)(this, "generativeProvider", new A()),
            (0, l._)(this, "downloadInfoProvider", void 0),
            (0, l._)(this, "getFileInfoProvider", void 0),
            (0, l._)(this, "variables", void 0),
            (this.variables = e.variables || {}),
            (this.downloadInfoProvider = new g(e.downloadInfoProviderParams)),
            (this.getFileInfoProvider = new _(e.getFileInfoProviderParams));
        }
      }
    },
  },
]);
