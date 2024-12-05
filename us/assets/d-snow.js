var v = Object.defineProperty;
var A = (r, t, i) => t in r ? v(r, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[t] = i;
var g = (r, t, i) => (A(r, typeof t != "symbol" ? t + "" : t, i), i);
import "./modulepreload-polyfill.js";
import { M as e, t as f, e as u, b as o } from "./mouse-watch.js";

class M {
    constructor(t, i, h) {
        g(this, "z");
        this.w = t;
        this.yukidaruma = h;
        this.r = e.random(2, 4);
        this.life = e.randomF(this.yMax * 0.6, this.yMax * 0.8);
        this.ySpeed = this.r / e.random(2, 3);
        this.ySpeed = this.ySpeed * this.ySpeed;
        this.xRadVal = e.random(0, this.r) + 20;
        Math.random() < 0.2 && (this.r = e.random(4, 8), this.life = e.randomF(this.yMax * 0.3, this.yMax * 0.5), this.ySpeed = this.r / e.random(3.2, 4), this.ySpeed = this.ySpeed * this.ySpeed, this.xRadVal = e.random(0, this.r) + 100);
        this.x = e.randomF(-100, this.w + 100);
        this.xBase = this.x;
        this.xMultiF = e.random(1, 10) * 0.001;
        this.xRandomF = e.random(4, 10);
        this.y = e.randomF(-i - i, i * 0.6);
        this.yMax = i;
        this.alphaBase = e.random(0.6, 0.8);
        this.alpha = this.alphaBase;
        this.isStop = false;
    }

    reset() {
        this.isStop = false;
        this.alpha = this.alphaBase; // 透明度をリセット
        this.x = e.randomF(-100, this.w + 100);
        this.xBase = this.x;
        this.y = e.randomF(30, 300) * -1;
        this.life = e.randomF(this.yMax - 1000, this.yMax);
    }

    stop() {
        this.isStop = true;
    }

    resize(t, i) {
        this.w = t;
        this.yMax = i;
    }

    render(t, i, h) {
        // キャンバスの下部からもっと上の位置（例：100px）でリセットする
        const resetHeight = this.yMax - 100;
    
        if (this.y >= resetHeight) {
            this.reset();
        } else {
            if (!this.isStop) {
                this.life--;
                if (this.life < 0) {
                    this.reset();
                }
                this.x = Math.sin(t * this.xMultiF + this.xRandomF) * this.xRadVal + this.xBase + h;
                this.y += this.ySpeed;
                this.alpha = Math.max(Math.min(this.alphaBase, this.life * 0.01), 0);
            }
        }
    
        const s = i.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
        s.addColorStop(0, "rgba(255, 255, 255, 1)");
        s.addColorStop(0.5, "rgba(255, 255, 255, 1)");
        s.addColorStop(1, `rgba(255, 255, 255, 0)`);
        i.save();
        i.fillStyle = s;
        i.globalAlpha = this.alpha;
        i.beginPath();
        i.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        i.fill();
        i.restore();
    }

    checkResetYukidaruma() {
        this.isStop === false || e.dist(this.x, 0, this.yukidaruma.x, 0) > 5 || this.reset();
    }
}
class k {
    constructor() { }
    reset(t) { this.x = t.x - 60, this.xAdd = -e.random(2, 4), this.y = t.y + 15, this.yAdd = e.random(-.5, .5), this.life = UserAgent.mobile ? e.randomF(10, 30) : e.randomF(20, 50) }
    render(t, i) {
        this.life--, this.x = this.x + this.xAdd, this.y = this.y + this.yAdd;
        const h = Math.min(.7, this.life * .02);
        t.fillStyle = "#fff", t.globalAlpha = h, t.beginPath(), t.arc(this.x, this.y, 1, 0, Math.PI * 2), t.fill()
    }
}
const c = { w: 300, h: 67 },
    y = [""];
class x {
    constructor(t, i) {
        this.isError = !1, this.isStart = !1, this.blowParticleCount = UserAgent.mobile ? 0 : 130, this.areaW = t, this.areaH = i, this.imgScale = 767 < t ? .7 : 1, this.imgDrawSize = { w: c.w * this.imgScale, h: c.h * this.imgScale }, this.isStart = !1, this.xSpeed = 767 < t ? 8 : 12, this.ySpeed = 767 < t ? 1.5 : 2.5, this.imgs = [];
        let h = 0;
        for (let s = 0; s < y.length; s++) this.imgs[s] = new Image, this.imgs[s].onload = () => { h++, h === 4 && this.start() }, this.imgs[s].onerror = () => { this.isError = !0 }, this.imgs[s].src = y[s];
        setTimeout(() => { h++, h === 4 && this.start() }, e.randomF(1, 3) * 1e3), this.blowParticles = [];
        for (let s = 0; s < this.blowParticleCount; s++) this.blowParticles[s] = new k;
        this.reset(), this.startPos === 1 ? this.y = e.random(this.areaH * .1, this.areaH * .3) : this.y = e.random(this.areaH * .1, this.areaH * .3), setTimeout(() => { this.isStart = !0 }, e.randomF(2, 5) * 1e3)
    }
    start() { this.isStart = !0 }
    resize(t, i) {
        this.areaW = t, this.areaH = i, this.imgScale = 767 < t ? .7 : .6, this.imgDrawSize = { w: c.w * this.imgScale, h: c.h * this.imgScale }, this.xSpeed = 767 < t ? 8 : 6, this.ySpeed = (767 < t, 0)
    }
    reset() {
        this.isStart = !1, setTimeout(() => { this.isStart = !0 }, e.randomF(4, 8) * 1e3), this.startPos = e.signV(), this.startPos === 1 ? (this.x = -this.imgDrawSize.w - this.areaW * .5 - 200, this.y = e.random(this.areaH * .2, this.areaH * .8)) : (this.x = -this.imgDrawSize.w - 200, this.y = e.random(this.areaH * .2, this.areaH * .8));
        const t = { x: this.x + this.imgDrawSize.w * .5, y: this.y + this.imgDrawSize.h * .5 };
        for (let i = 0; i < this.blowParticleCount; i++) this.blowParticles[i].reset(t)
    }
    render(t, i) {
        if (this.isError || !this.isStart) return;
        this.x = this.x + this.xSpeed, this.y = this.y - this.ySpeed;
        const h = this.imgs[Math.floor(t * .06 % 3)];
        i.globalAlpha = .8, i.save(), this.startPos === 1 ? (i.translate(this.areaW * .5, 0), i.rotate(.25), i.scale(-1, 1), i.drawImage(h, this.x, this.y, this.imgDrawSize.w, this.imgDrawSize.h)) : (i.rotate(-.25), i.drawImage(h, this.x, this.y, this.imgDrawSize.w, this.imgDrawSize.h));
        const s = { x: this.x + this.imgDrawSize.w * .5, y: this.y + this.imgDrawSize.h * .5 };
        for (let a = 0; a < this.blowParticleCount; a++) this.blowParticles[a].render(i, this.startPos), this.blowParticles[a].life <= 0 && this.blowParticles[a].reset(s);
        i.restore(), this.areaW < this.x && this.reset()
    }
}
const l = .09,
    m = [{ w: 458, h: 346 }, { w: 264, h: 203 }, { w: 297, h: 227 }],
    p = [""];
class b {
    constructor() {
        this.isError = !1, this.isStart = !1, this.x = -100, this.contentsH = 0, this.isAnimationMoveX = !1, this.isAnimationAtama = !1, this.imgs = [];
        let t = 0;
        for (let i = 0; i < p.length; i++) this.imgs[i] = new Image, this.imgs[i].onload = () => { t++, t === 3 && (this.isStart = !0) }, this.imgs[i].onerror = () => { this.isError = !0 }, this.imgs[i].src = p[i]
    }
    resize(t, i) { this.winW = t, this.contentsH = i, this.end() }
    start() { this.isAnimationMoveX = !0, this.x = -100, this.atamaAlpha = 0, this.handsAlpha = 0, this.mahuraAlpha = 0 }
    end() { this.isAnimationMoveX = !1, this.x = -100, this.isAnimationAtama = !1, this.atamaAlpha = 0, this.handsAlpha = 0, this.mahuraAlpha = 0, setTimeout(() => { !this.isAnimationMoveX && !this.isAnimationAtama && this.start() }, e.randomF(8, 12) * 1e3) }
    render(t) {
        if (this.isError || !this.isStart) return;
        this.y = this.contentsH + 2, this.isAnimationMoveX && (this.x = this.x + 5), this.winW - 30 < this.x && this.animationAtama();
        const i = e.map(this.x, -100, this.winW - 30, 4, 20);
        t.fillStyle = "#fff", t.globalAlpha = 1, t.beginPath(), t.arc(this.x, this.y - i * 1, i, 0, Math.PI * 2), t.fill(), this.isAnimationAtama && (t.save(), t.fillStyle = "#fff", t.globalAlpha = this.atamaAlpha, t.beginPath(), t.arc(this.x, this.y - this.atamaY, 14, 0, Math.PI * 2), t.fill(), t.restore(), t.save(), t.globalAlpha = this.handsAlpha, t.drawImage(this.imgs[1], this.x - 35, this.y - 40, m[1].w * l, m[1].h * l), t.drawImage(this.imgs[2], this.x + 5, this.y - 40, m[2].w * l, m[2].h * l), t.globalAlpha = this.mahuraAlpha, t.drawImage(this.imgs[0], this.x - 22, this.y - 46, m[0].w * l, m[0].h * l), t.restore())
    }
    animationAtama() {
        if (this.isAnimationAtama) return;
        this.isAnimationMoveX = !1, this.isAnimationAtama = !0, f(.5, () => { }, s => {
            const a = u.easeInCirc(s);
            this.atamaY = a * -10 + 57, this.atamaAlpha = s * 5
        }, () => { this.animationParts() })
    }
    animationParts() {
        f(.4, () => { }, s => {
            const a = e.constrain(s * 2, 0, 1), d = e.constrain(s * 2 - 1, 0, 1), w = u.easeInCirc(a), S = u.easeInCirc(d);
            this.mahuraAlpha = w, this.handsAlpha = S
        }, () => { setTimeout(() => { this.isAnimationMoveX = !0 }, 4e3), setTimeout(() => { this.end() }, 5e3) })
    }
}
const n = [document.querySelector("#main").children[0], document.querySelector("#main").children[1], document.querySelector("#main").children[2]],
    F = UserAgent.mobile ? 300 : 500;
class z {
    constructor() {
        if (this.mouseMoveX = 0, this.cnvs = document.createElement("canvas"), this.ctx = this.cnvs.getContext("2d"), this.cnvs.style.position = "absolute", this.cnvs.style.left = 0, this.cnvs.style.top = 0, this.cnvs.style.zIndex = 2, this.cnvs.style.opacity = 0, this.cnvs.style.transition = "opacity 1s ease 0s", this.cnvs.style.pointerEvents = "none", document.body.append(this.cnvs), MouseWatch.register(this), ResizeWatch.register(this), ScrollWatch.register(this), RenderWatch.register(this), RenderWatch.setFps(30), this.getIsTonakai()) {
            const i = n[0], h = o(i), s = n[2], a = o(s);
            this.tonakai = new x(this.cnvs.width, h.height + a.height)
        }
        this.yukidaruma = new b(this.cnvs.width), this.yukidaruma.resize(this.cnvs.width, this.cnvs.height), this.yukidarumaIsAnimation = !1, setTimeout(() => { this.yukidarumaIsAnimation || (this.yukidarumaIsAnimation = !0, this.yukidaruma.start()) }, 20 * 1e3), this.particlesX = 0, this.particles = [];
        for (let i = 0; i < F; i++) this.particles.push(new M(this.cnvs.width, this.cnvs.height + 1, this.yukidaruma));
        setTimeout(() => { this.cnvs.style.opacity = 1 }, 500)
    }
    getIsTonakai() {
        const t = new Date, i = t.getFullYear(), h = t.getMonth() + 1, s = t.getDate();
        return i === 2023 && h === 11 || i === 2023 && h === 12 && s <= 25
    }
    resize() {
        this.setCnvsSize();
        if (this.particles) for (let t = 0; t < this.particles.length; t++) this.particles[t].resize(this.cnvs.width, this.cnvs.height);
        if (this.tonakai) {
            let t = ResizeWatch.width;
            768 <= ResizeWatch.width && ResizeWatch.width <= 1200 && (t = 1200);
            const i = n[0], h = o(i), s = n[1], a = o(s);
            this.tonakai.resize(t, h.height + a.height)
        }
        this.yukidaruma && this.yukidaruma.resize(this.cnvs.width, this.cnvs.height)
    }
    setCnvsSize() {
      const t = o(n[0]).fixTop;
      let i = 0;
      for (let s = 0; s < n.length; s++) {
          const a = n[s], d = o(a);
          i += d.height;
      }
      if (768 <= ResizeWatch.width) {
          i = i - 9;
      }
      // Calculate the total height of the document minus the footer height
      const footerHeight = document.querySelector('Footer').offsetHeight;
      i = document.documentElement.scrollHeight - footerHeight;
  
      if (UserAgent.pc && this.particles) {
          for (let s = 0; s < this.particles.length; s++) {
              this.particles[s].isStop && this.particles[s].reset();
          }
      }
      let h = ResizeWatch.width;
      768 <= ResizeWatch.width && ResizeWatch.width <= 1200 && (h = 1200);
      this.cnvs.style.top = `${t}px`;
      this.cnvs.width = h;
      this.cnvs.height = i + 1;
      if (UserAgent.ios) {
          this.cnvs.width = h * 2;
          this.cnvs.height = (i + 1) * 2;
          this.cnvs.style.width = `${h}px`;
          this.cnvs.style.height = `${i + 1}px`;
      }
    }
    
    mousemove() { }
    scroll() {
        const t = ScrollWatch.y + ResizeWatch.height * .7;
        if (this.cnvs.height * .5 < t) {
            if (this.yukidarumaIsAnimation) return;
            this.yukidarumaIsAnimation = !0, this.yukidaruma.start()
        }
    }
    render(t) {
        this.ctx.clearRect(0, 0, this.cnvs.width, this.cnvs.height), this.particlesX = Math.sin(t * 3 / 1e3) * 100;
        for (let i = 0; i < this.particles.length; i++) this.particles[i].render(t, this.ctx, this.particlesX);
        this.tonakai && this.tonakai.render(t, this.ctx), this.yukidaruma.render(this.ctx)
    }
}
window.addEventListener("load", function () { new z });
