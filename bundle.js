(()=>{"use strict";window.util={isEscEvent:(e,t)=>{27===e.keyCode&&t()},isClickEvent:e=>{e()},isEnterEvent:(e,t)=>{13===e.keyCode&&t()},isMainMouseButtonEvent:(e,t)=>{0===e.button&&t()},renderChildren:(e,t,n,r=window.remove.removeChildren)=>{r(e);const o=document.createDocumentFragment();t.forEach((e=>{const t=n(e);o.appendChild(t)})),e.appendChild(o)},forEach:(e,t)=>Array.prototype.forEach.call(e,t),debounce:e=>{let t;return(...n)=>{t&&window.clearTimeout(t),t=window.setTimeout((()=>{e(...n)}),500)}}},window.remove={removeCard:()=>{const e=document.querySelector(".popup");e&&e.remove(),document.removeEventListener("keydown",window.card.onEscPressCloseCard),window.map.removeClassActivePin()},removeChildren:e=>{for(;e.firstChild;)e.firstChild.remove()}},(()=>{const e=document.querySelector(".map__pin--main"),t=e=>{window.util.isMainMouseButtonEvent(e,window.activate.activatePage)},n=e=>{window.util.isEnterEvent(e,window.activate.activatePage)};window.pin={moveToStartPosition:()=>{e.style.left="570px",e.style.top="375px"},removeEventListenersOnPin:()=>{e.removeEventListener("mousedown",t),e.removeEventListener("keydown",n)},addEventListenersOnPin:()=>{e.addEventListener("mousedown",t),e.addEventListener("keydown",n)},removePins:()=>{document.querySelectorAll(".map__pin").forEach((t=>{t!==e&&t.remove()}))}}})(),(()=>{const e=document.querySelector("main"),t=e.querySelector(".map__pin--main"),n=document.querySelector("#error").content.querySelector(".error"),r=document.querySelector("#success").content.querySelector(".success"),o=e=>{window.util.isClickEvent(s.bind(null,e))},i=(e,t)=>{window.util.isEscEvent(t,s.bind(null,e))},a=(e,t)=>{window.util.isEnterEvent(t,s.bind(null,e))},s=e=>{e&&e.remove(),window.pin.addEventListenersOnPin(),t.disabled=!1},d=(n,r,s,d)=>{const l=r.cloneNode(!0);n&&(l.querySelector(s).textContent=n),window.pin.removeEventListenersOnPin(),t.disabled=!0,d&&l.querySelector(d).addEventListener("keydown",a.bind(null,l)),document.addEventListener("mousedown",o.bind(null,l)),document.addEventListener("keydown",i.bind(null,l)),e.insertAdjacentElement("afterbegin",l)};window.popup={onError:e=>{d(e,n,".error__message",".error__button")},showSuccesPopup:()=>{d(null,r,null,null)}}})(),(()=>{const e="https://21.javascript.pages.academy/keksobooking",t="https://21.javascript.pages.academy/keksobooking/data",n="GET",r="POST",o=(e,t,r,o=n,i)=>{const a=new XMLHttpRequest;a.responseType="json",a.addEventListener("load",(()=>{((e,t,n)=>{200===e.status?t(e.response):n("Статус ответа: "+e.status+" "+e.statusText)})(a,t,r)})),a.timeout=1e4,((e,t)=>{e.addEventListener("error",(()=>{t("Произошла ошибка соединения")}))})(a,r),((e,t)=>{e.addEventListener("timeout",(()=>{t("Запрос не успел выполниться за "+e.timeout+"мс")}))})(a,r),a.open(o,e),a.send(i)};window.sync={save:(t,n)=>{o(e,n,window.popup.onError,r,t)},load:e=>{o(t,e,window.popup.onError,n,null)}}})(),(()=>{const e=45,t=40,n="Фотография жилья";window.data={createOfferFeature:e=>{const t=document.createElement("li");return t.classList.add("popup__feature","popup__feature--"+e),t},createOfferImg:r=>{const o=document.createElement("img");return o.src=r,o.classList.add("popup__photo"),o.width=e,o.height=t,o.alt=n,o}}})(),(()=>{const e=document.querySelector(".map"),t=e.querySelector(".map__filters-container"),n=document.querySelector("#pin").content.querySelector(".map__pin"),r=()=>{const t=e.querySelector(".map__pin--active");t&&t.classList.remove("map__pin--active")};window.map={renderPinOnMap:e=>{const t=n.cloneNode(!0),o=e.location.x-25,i=e.location.y-70;t.style.left=o+"px",t.style.top=i+"px";const a=t.querySelector("img");a.src=e.author.avatar,a.alt=e.offer.title;const s=()=>{r(),window.remove.removeCard(),t.classList.add("map__pin--active"),window.map.renderCardOnMap(e)};return t.addEventListener("click",(()=>{s()})),t.addEventListener("keydown",(e=>{window.util.isEnterEvent(e,s)})),t},renderCardOnMap:n=>{e.insertBefore(window.card.renderCard(n),t)},removeClassActivePin:r}})(),(()=>{const e=document.querySelector(".map__pin--main"),t=document.querySelector(".ad-form").elements.address;e.addEventListener("mousedown",(n=>{n.preventDefault();let r={x:n.clientX,y:n.clientY};const o=n=>{const o=r.x-n.clientX,i=r.y-n.clientY;r={x:n.clientX,y:n.clientY};let a=e.offsetLeft-o;a<-31?a=-31:a>1169&&(a=1169);let s=e.offsetTop-i;s<52?s=52:s>552&&(s=552),((n,r)=>{var o;e.style.left=n+"px",e.style.top=r+"px",t.value=(o=r,`${n+Math.ceil(31)}, ${o+78}`)})(a,s)},i=e=>{e.preventDefault(),o(e)},a=e=>{e.preventDefault(),o(e),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",i),document.addEventListener("mouseup",a)}))})(),(()=>{const e={bungalow:"Бунгало",flat:"Квартира",house:"Дом",palace:"Дворец"},t=document.querySelector("#card").content.querySelector(".map__card"),n=e=>{window.util.isEscEvent(e,window.remove.removeCard)},r=()=>{window.remove.removeCard()},o=e=>{window.util.isEnterEvent(e,window.remove.removeCard)};window.card={renderCard:i=>{const a=t.cloneNode(!0),s=a.querySelector(".popup__title"),d=a.querySelector(".popup__text--address"),l=a.querySelector(".popup__text--price"),c=a.querySelector(".popup__type"),u=a.querySelector(".popup__text--capacity"),m=a.querySelector(".popup__text--time"),p=a.querySelector(".popup__description"),w=a.querySelector(".popup__avatar");i.offer.title&&(s.textContent=i.offer.title),i.offer.address&&(d.textContent=i.offer.address),i.offer.price&&(l.textContent=i.offer.price+"₽/ночь"),i.offer.type&&(c.textContent=e[i.offer.type]),i.offer.rooms&&(u.textContent=`${i.offer.rooms} комнаты для ${i.offer.guests} гостей`),i.offer.checkin&&i.offer.checkout&&(m.textContent=`Заезд после ${i.offer.checkin}, выезд до ${i.offer.checkout}`),window.util.renderChildren(a.querySelector(".popup__features"),i.offer.features,window.data.createOfferFeature),p.textContent=i.offer.description,window.util.renderChildren(a.querySelector(".popup__photos"),i.offer.photos,window.data.createOfferImg),w.src=i.author.avatar;const v=a.querySelector(".popup__close");return document.addEventListener("keydown",n),v.addEventListener("click",r),v.addEventListener("keydown",o),a},onEscPressCloseCard:n}})(),(()=>{const e=document.querySelector(".map"),t=e.querySelector(".map__pin--main"),n=document.querySelector(".ad-form"),r=n.elements.address,o=document.querySelector(".map__filters"),i=(e,t)=>{window.util.forEach(e.elements,(e=>{e.disabled=t}))},a=()=>{r.value=((e,n,r)=>{const o=parseInt(t.style.left,10),i=parseInt(t.style.top,10);return`${o+Math.ceil(32.5)}, ${i+Math.ceil(32.5)}`})()};window.disable={disablePage:t=>{t?(e.classList.add("map--faded"),n.classList.add("ad-form--disabled"),window.pin.removePins(),window.remove.removeCard()):(e.classList.remove("map--faded"),n.classList.remove("ad-form--disabled")),i(n,t),i(o,t),a()},getCoordMainPin:a}})(),(()=>{let e=[];window.adsData={get:()=>e,set:t=>{e=t}}})(),(()=>{const e=document.querySelector(".map").querySelector(".map__pins"),t=document.querySelector(".map__filters"),n=t.querySelector("#housing-type"),r=t.querySelector("#housing-price"),o=t.querySelector("#housing-rooms"),i=t.querySelector("#housing-guests"),a=t.querySelector(".map__features");let s={"housing-type":"any","housing-price":"any","housing-rooms":"any","housing-guests":"any","filter-wifi":"any","filter-dishwasher":"any","filter-parking":"any","filter-washer":"any","filter-elevator":"any","filter-conditioner":"any"};const d={any:{min:0,max:1/0},low:{min:0,max:9999},middle:{min:1e4,max:49999},high:{min:5e4,max:1/0}},l=e=>"any"===e,c=(e,t)=>("any"!==t&&(t=parseInt(t,10)),l(t)||e===t),u=(e,t)=>l(t)||e.includes(t),m=e=>{return t=e.offer.type,n=s["housing-type"],(l(n)||t===n)&&((e,t)=>{let n=d[t].min,r=d[t].max;return l(t)||n<=e&&e<=r})(e.offer.price,s["housing-price"])&&c(e.offer.rooms,s["housing-rooms"])&&c(e.offer.guests,s["housing-guests"])&&u(e.offer.features,s["filter-wifi"])&&u(e.offer.features,s["filter-dishwasher"])&&u(e.offer.features,s["filter-parking"])&&u(e.offer.features,s["filter-washer"])&&u(e.offer.features,s["filter-elevator"])&&u(e.offer.features,s["filter-conditioner"]);var t,n},p=()=>((e,t,n)=>{const r=[];for(let n=0;n<e.length&&5!==r.length;n++){const o=e[n];t(o,n,e)&&r.push(o)}return r})(window.adsData.get(),m),w=window.util.debounce((()=>{const t=p();window.remove.removeCard(),window.util.renderChildren(e,t,window.map.renderPinOnMap,window.pin.removePins)})),v=e=>{"checkbox"===e.target.type?(e=>{s[e.target.id]=s[e.target.id]!==e.target.value?e.target.value:"any"})(e):s[e.target.name]=e.target.value,w()};n.addEventListener("change",v),r.addEventListener("change",v),o.addEventListener("change",v),i.addEventListener("change",v),a.addEventListener("change",v),window.filter={resetCurrentFilter:()=>{s={"housing-type":"any","housing-price":"any","housing-rooms":"any","housing-guests":"any","filter-wifi":"any","filter-dishwasher":"any","filter-parking":"any","filter-washer":"any","filter-elevator":"any","filter-conditioner":"any"}},getFilteredAds:p}})(),(()=>{const e=document.querySelector(".map__pins"),t=document.querySelector(".map__pin--main"),n=n=>{const r=n.filter((e=>e.offer));window.adsData.set(r);const o=window.filter.getFilteredAds();window.util.renderChildren(e,o,window.map.renderPinOnMap,window.pin.removePins),window.disable.disablePage(!1),window.form.onFormChange(!0),window.reset.onResetButton(),window.pin.removeEventListenersOnPin(),t.disabled=!1};window.pin.addEventListenersOnPin(),window.disable.disablePage(!0),window.activate={activatePage:()=>{window.sync.load(n)}}})(),(()=>{const e=["gif","jpg","jpeg","png"],t="img/muffin-grey.svg",n=document.querySelector(".ad-form-header__input"),r=document.querySelector(".ad-form-header__preview").querySelector("img"),o=document.querySelector(".ad-form__input"),i=document.querySelector(".ad-form__photo").querySelector("img"),a=(t,n)=>{t.addEventListener("change",(()=>{const r=t.files[0],o=r.name.toLowerCase();if(e.some((e=>o.endsWith(e)))){const e=new FileReader;e.addEventListener("load",(()=>{n.src=e.result})),e.readAsDataURL(r)}}))};a(n,r),a(o,i),window.preview={resetPreview:()=>{r.src=t,i.src=t}}})(),(()=>{const e=document.querySelector(".ad-form"),t=e.elements.price,n=e.querySelector(".ad-form__reset"),r=document.querySelector(".map__filters"),o=()=>{window.disable.disablePage(!0),e.reset(),t.min=1e3,t.placeholder=1e3,r.reset(),window.pin.moveToStartPosition(),window.disable.getCoordMainPin(),window.form.onFormChange(!1),window.filter.resetCurrentFilter(),window.preview.resetPreview()},i=()=>{o(),window.pin.addEventListenersOnPin()},a=e=>{window.util.isEnterEvent(e,o)};window.reset={resetPage:o,onResetButton:()=>{n.addEventListener("click",i),n.addEventListener("click",a)}}})(),(()=>{const e={bungalow:0,flat:1e3,house:5e3,palace:1e4},t=document.querySelector(".ad-form"),n=t.elements.room_number,r=t.elements.capacity,o=t.elements.title,i=t.elements.type,a=t.elements.price,s=t.elements.timein,d=t.elements.timeout,l=e=>{e?d.value=s.value:s.value=d.value},c=e=>{const t=parseInt(n.value,10),o=parseInt(r.value,10);t<o?e.setCustomValidity(`Для ${o} гостей нужно минимум ${o} комнаты`):100===t&&0!==o?e.setCustomValidity('Для "100 комнат" нужно выбрать "не для гостей"'):100!==t&&0===o?e.setCustomValidity("Не для гостей нужно выбрать 100 комнат"):e.setCustomValidity(""),e.reportValidity()},u=()=>{(()=>{const e=o.value.length;e<30?o.setCustomValidity(`Минимальная длина заголовка - 30 символов. Осталось еще ${30-e} симв.`):e>100?o.setCustomValidity(`Максимальная длина заголовка - 100 символов. Удалите лишние ${e-100} симв.`):o.setCustomValidity(""),o.reportValidity()})()},m=()=>{(()=>{const t=i.value,n=e[t];t&&(a.min=n,a.placeholder=n)})()},p=()=>{(()=>{const t=i.value,n=e[t],r=parseInt(a.value,10);r<n?a.setCustomValidity(`Минимальная цена для типа жилья  ${i.options[i.selectedIndex].text} - ${n} руб. за ночь. Увеличьте цену на ${n-r} руб.`):a.setCustomValidity(""),a.reportValidity()})()},w=()=>{l(!0)},v=()=>{l(!1)},f=()=>{c(n)},y=()=>{c(r)};t.addEventListener("submit",(e=>{window.sync.save(new FormData(t),(()=>{window.reset.resetPage(),window.popup.showSuccesPopup(),window.pin.addEventListenersOnPin()})),e.preventDefault()})),window.form={onFormChange:e=>{e?(s.addEventListener("change",w),d.addEventListener("change",v),i.addEventListener("change",m),i.addEventListener("change",p),a.addEventListener("input",p),o.addEventListener("input",u),n.addEventListener("change",f),r.addEventListener("change",y)):(s.removeEventListener("change",w),d.removeEventListener("change",v),i.removeEventListener("change",m),i.removeEventListener("change",p),a.removeEventListener("input",p),o.removeEventListener("input",u),n.removeEventListener("change",f),r.removeEventListener("change",y))}}})()})();