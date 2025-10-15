class CartNotification extends HTMLElement {
    constructor() {
      super();
      this.cartCountDown = this.querySelector('.cart-countdown-time');
      this.startTime = Date.now();
      this.countdownTimer();
    }

    countdownTimer() {
      if (!this.cartCountDown) return;
      const e = Number(this.cartCountDown.dataset.countdownTime) || 5,
            t = this.cartCountDown.dataset.timeoutMessage,
            r = this.startTime + 60 * e * 1000;

      const i = setInterval(() => {
        if (document.querySelector(".cart-countdown-time .countdown-message")) {
          if (Date.now() > r) {
            this.cartCountDown.querySelector(".countdown-message").innerHTML = t;
            clearInterval(i);
          } else {
            const remaining = r - Date.now(),
                  minutes = Math.floor((remaining % 3600000) / 60000),
                  seconds = Math.floor((remaining % 60000) / 1000);

            document.querySelector(".countdown-timer-minute").innerHTML = String(minutes).padStart(2, '0');
            document.querySelector(".countdown-timer-sec").innerHTML = String(seconds).padStart(2, '0');
          }
        } else {
          clearInterval(i);
        }
      }, 1000);
    }
  }

 customElements.define("cart-notification", CartNotification);
 window.CartNotificationLoaded = true;