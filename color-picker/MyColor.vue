<script>
export default {
    props: {
        modelValue: {
            type: String,
            // 初始值供父組件沒有 v-model 者
            default: '#000000ff'
        }
    },
    data() {
        return {
            Rvalue: null,
            Gvalue: null,
            Bvalue: null,
            Avalue: null,
            hex: null,
            rgba: null,

            modelHEX: false,
            modelRGB: false,
        }
    },
    watch: {
        modelValue: {
            handler(initialValue) {
                if (initialValue.includes('#')) {
                    this.hex = initialValue;
                    // 父組件沒有 v-model 者，因有props default，故仍會 this.modelHEX = true
                    this.modelHEX = true;
                    this.HEXtoRGB();
                }
                if (initialValue.includes('rgba')) {
                    this.rgba = initialValue;
                    this.modelRGB = true;
                    this.setRGB();
                }
            },
            immediate: true
        },
        Rvalue(newValue, oldValue) {
            this.Rvalue = this.checkRGB(newValue);
        },
        Gvalue(newValue, oldValue) {
            this.Gvalue = this.checkRGB(newValue);
        },
        Bvalue(newValue, oldValue) {
            this.Bvalue = this.checkRGB(newValue);
        },
        Avalue(newValue, oldValue) {
            this.Avalue = this.checkAlpha(newValue);
        },
    },
    methods: {
        checkRGB(value) {
            // 以 parseInt 拒絕 0123, 000123 諸如此類最高位數為 0 的狀況
            value = parseInt(value);
            if (value > 255) {
                return 255;
            }
            else if (value < 0 || value === '' || isNaN(value)) {
                return '';
            }
            else {
                return value;
            }
        },
        checkAlpha(value) {
            // 等號用來拒絕 1. 這種狀況
            if (parseFloat(value) >= 1) {
                return 1;
            }
            // 小數點前的 0 必須保留，且只有唯一 0
            // startsWith 用來拒絕 00.123, 000.123 諸如此類小數點前多個0的狀況
            // 雖然可以用 value = parseFloat(value); 來偵測，但若要手動輸入 0.123，會因為輸入到 0. 就被判定非浮點數而無法順利打出預期小數點
            // 若改成 value <= 0，就會無法輸入小數點
            else if (value.toString().startsWith('00') || value < 0 || value === '' || isNaN(value)) {
                return '';
            }
            // alpha 最多只接受到小數後三位。因 length 是字串屬性，加上小數位前的 '0.' ，所以長度是 5
            else if (value.toString().length > 5) {
                return value.slice(0, 5);
            }
            else {
                return value;
            }
        },



        HEXtoRGB() {
            // 使用者未必會輸入大寫，這裡自動轉成大寫
            this.hex = this.hex.toUpperCase();
            // 檢查 hex 色碼長度
            if (this.hex.length > 9) {
                this.hex = this.hex.slice(0, 9);
            }
            // 檢查 hex 輸入:未輸入
            if (this.hex === '' || this.hex === '#') {
                // 方便使用，使用者只要打數字和字母就好，不用特別處理特殊符號 "#"
                this.hex = '#';

                this.rgba = '';
                this.Rvalue = 0;
                this.Gvalue = 0;
                this.Bvalue = 0;
                this.Avalue = 0;
                return;
            }
            // 檢查hex輸入:輸入非 16 進位
            for (let i = 1; i < this.hex.toString().length; i++) {
                if (isNaN(parseInt(this.hex[i], 16))) {
                    this.hex = this.hex.slice(0, i);
                }
            }
            // 以下函式參考來源: https://reurl.cc/D4kade by:AJFarkas
            // 檢查有無完整提供 R 值，沒有就視為 0
            if (this.hex.slice(1, 2) && this.hex.slice(2, 3)) {
                this.Rvalue = parseInt(this.hex.slice(1, 3), 16);
            }
            else {
                this.Rvalue = 0;
            }
            // 檢查有無完整提供 G 值，沒有就視為 0
            if (this.hex.slice(3, 4) && this.hex.slice(4, 5)) {
                this.Gvalue = parseInt(this.hex.slice(3, 5), 16);
            }
            else {
                this.Gvalue = 0;
            }
            // 檢查有無完整提供 B 值，沒有就視為 0
            if (this.hex.slice(5, 6) && this.hex.slice(6, 7)) {
                this.Bvalue = parseInt(this.hex.slice(5, 7), 16);
            }
            else {
                this.Bvalue = 0;
            }
            // 檢查有無完整提供 A 值，沒有就視為 1
            if (this.hex.slice(7, 8) && this.hex.slice(8, 9)) {
                this.Avalue = parseFloat((parseInt(this.hex.slice(7, 9), 16) / 255).toFixed(3));
            }
            else {
                this.Avalue = 1;
            }
            this.rgba = `rgba(${this.Rvalue}, ${this.Gvalue}, ${this.Bvalue}, ${this.Avalue})`;
        },

        RGBtoHEX() {
            this.rgba = `rgba(${this.Rvalue}, ${this.Gvalue}, ${this.Bvalue}, ${this.Avalue})`;

            // 以下函式參考來源: https://reurl.cc/RWGx3g by:Sotos
            // parseInt 的參數型別是 string，this.*value 是 number(int)，雖然照用 parseInt 也可以，但語法不嚴謹
            // Numner 可以有和 parseInt 同樣效果，且接受的參數型別包含 string, number
            let red = Number(this.Rvalue).toString(16).padStart(2, '0');
            let green = Number(this.Gvalue).toString(16).padStart(2, '0');
            let blue = Number(this.Bvalue).toString(16).padStart(2, '0');
            let alpha = Math.round(Number(this.Avalue) * 255).toString(16).padStart(2, '0');
            // hex 要保持大寫
            this.hex = (`#${red}${green}${blue}${alpha}`).toUpperCase();
        },

        setRGB() {
            if (this.rgba === '') {
                this.rgba = 'rgba(0, 0, 0, 0)';
            }
            let pureRGBA = this.rgba.replace('rgba', '');
            pureRGBA = pureRGBA.replace('(', '');
            pureRGBA = pureRGBA.replace(')', '');

            // parseInt, parseFloat 會自動無視開頭的空白，而這邊 alpha 又不適用 parseFloat ，否則輸入0.也無法成功輸入小數位
            // 既沒有 parseFloat ，又以',' 而非 ', ' 作split，故 alpha 一定會有空白字元開頭，所以要 trim()
            this.Rvalue = this.checkRGB(parseInt(pureRGBA.split(',')[0]));
            this.Gvalue = this.checkRGB(parseInt(pureRGBA.split(',')[1]));
            this.Bvalue = this.checkRGB(parseInt(pureRGBA.split(',')[2]));
            this.Avalue = this.checkAlpha((pureRGBA.split(',')[3]).trim());

            this.RGBtoHEX();
        },


        padZero() {
            if (this.Rvalue === '') {
                this.Rvalue = 0;
            }
            if (this.Gvalue === '') {
                this.Gvalue = 0;
            }
            if (this.Bvalue === '') {
                this.Bvalue = 0;
            }
            if (this.Avalue === '') {
                this.Avalue = 0;
            }
            this.rgba = `rgba(${this.Rvalue}, ${this.Gvalue}, ${this.Bvalue}, ${this.Avalue})`;
            this.RGBtoHEX();
        },

        copy(event) {
            let inputValue = event.target.previousSibling.value;
            navigator.clipboard.writeText(inputValue);
            event.target.nextSibling.textContent = 'copied';
            event.target.nextSibling.style.right = '-20px';
            event.target.nextSibling.style.display = 'flex';

            // 1.5 秒後還原 copy 字樣 CSS
            setTimeout(() => {
                event.target.nextSibling.textContent = 'copy';
                event.target.nextSibling.style.right = '';
                event.target.nextSibling.style.display = '';
            }, 1500);
        }
    },
}
</script>

<template>
    <!-- fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <div class="container">
        <div class="colorView">
            <img class="transparent">
            <!-- 父組件沒有 v-model 者，預設會是 hex 色碼 (#000000FF) -->
            <div class="colorBlock" v-if="modelHEX" :style="{ 'background-color': hex }"></div>
            <div class="colorBlock" v-if="modelRGB" :style="{ 'background-color': rgba }"></div>
        </div>

        <div class="colorValue">
            <div class="colorCode">
                <div class="hex">
                    <input type="text" v-model="hex" @input="HEXtoRGB" placeholder="#RRGGBB(AA)">
                    <button @click="copy">
                        <i class="fa-regular fa-copy"></i>
                    </button>
                    <p class="hint">copy</p>
                </div>

                <div class="rgba">
                    <input type="text" v-model="rgba" @input="setRGB" @blur="padZero" placeholder="rgba(r, g, b, a)">
                    <button @click="copy">
                        <i class="fa-regular fa-copy"></i>
                    </button>
                    <p class="hint">copy</p>
                </div>
            </div>

            <div class="rgbaSetting red">
                <label for="red">R</label>
                <input type="range" id="red" min="0" max="255" v-model="Rvalue" @input="RGBtoHEX">
                <!-- 因 type="number" 仍會支援 leading 0 且用函式也無法去除，除非用 text + 函式才能去除 -->
                <input type="text" v-model="Rvalue" @input="RGBtoHEX" @blur="padZero">
            </div>

            <div class="rgbaSetting green">
                <label for="green">G</label>
                <input type="range" id="green" min="0" max="255" v-model="Gvalue" @input="RGBtoHEX">
                <input type="text" v-model="Gvalue" @input="RGBtoHEX" @blur="padZero">
            </div>

            <div class="rgbaSetting blue">
                <label for="blue">B</label>
                <input type="range" id="blue" min="0" max="255" v-model="Bvalue" @input="RGBtoHEX">
                <input type="text" v-model="Bvalue" @input="RGBtoHEX" @blur="padZero">
            </div>

            <div class="rgbaSetting alpha">
                <label for="alpha">A</label>
                <input type="range" id="alpha" min="0" max="1" step="0.001" v-model="Avalue" @input="RGBtoHEX">
                <input type="text" v-model="Avalue" @input="RGBtoHEX" @blur="padZero">
            </div>

        </div>
    </div>
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

.container {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    box-shadow: 0 0 2px 2px #ccc;
    border-radius: 10px;
    text-align: center;
}

.colorView {
    display: inline-block;
    width: 300px;
    height: 200px;
    border-radius: 5px;
    position: relative;
    border: 1px solid #ccc;
    /* 因為有圓角，若子物件(.transparent, .colorBlock)沒有設定與父層相同的圓角，就會凸出去。以防萬一的防範措施 */
    overflow: hidden;
}

.colorView .transparent,
.colorView .colorBlock {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px;
}

.colorView .transparent {
    background: url('https://t3.ftcdn.net/jpg/04/71/63/80/360_F_471638092_3MMZ9pE8idFf3b5lFeE9YcTdpCRB4jvF.jpg') no-repeat center center / cover;
}

.colorCode .hex,
.colorCode .rgba {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.colorCode input {
    margin: 5px 0;
    padding: 5px;
    text-align: center;
    cursor: text;
}

.colorCode button {
    cursor: pointer;
    /* 和 input 同 padding 尺寸*/
    padding: 5px;
    background-color: transparent;
    border-color: transparent;
}

.colorCode button i {
    color: #666;
    transition: .3s;
    /* 雖然 icon 在 button 裡面，但如果是在 icon 區域點擊，還是會認為觸發事件的元素是 icon 而非 button 致使 copy 失敗 */
    pointer-events: none;
}

.colorCode button:hover i {
    color: #000;
}

.colorCode .hint {
    display: none;
    position: absolute;
    padding: 5px;
    top: 0;
    bottom: 0;
    right: -10px;
    margin: auto 0;
    background-color: rgba(70, 70, 70, .7);
    color: #fff;
    border-radius: 5px;
}

.colorCode button:hover~.hint {
    display: block;
}

.colorValue .rgbaSetting {
    display: flex;
    justify-content: center;
    align-items: center;
}

.colorValue .rgbaSetting {
    margin-top: 10px;
}

.colorValue label {
    /* 因每個字母原始的字符寬度不同，以固定寬度來精準對齊 */
    width: 20px;
}

.colorValue input {
    margin-left: 10px;
}

.colorValue .rgbaSetting input[type="text"] {
    text-align: center;
    border: transparent;
    /* 固定寬度，用以對齊 alpha 和 RGB 的輸入框，因 alpha 為小數點，會有較多數字，原始的寬度會較寬而無法對齊 */
    width: 50px;
}

.colorValue .rgbaSetting.red label,
.colorValue .rgbaSetting.red input[type="text"] {
    color: #f00;
    font-weight: 900;
}

.colorValue .rgbaSetting.green label,
.colorValue .rgbaSetting.green input[type="text"] {
    color: #0f0;
    font-weight: 900;
}

.colorValue .rgbaSetting.blue label,
.colorValue .rgbaSetting.blue input[type="text"] {
    color: #00f;
    font-weight: 900;
}

.colorValue .rgbaSetting.alpha label,
.colorValue .rgbaSetting.alpha input[type="text"] {
    color: #999;
    font-weight: 900;
}

/* 滾動條 CSS 參考來源: https://reurl.cc/M4Qe2K */
.colorValue .rgbaSetting input[type="range"],
.colorValue .rgbaSetting input[type="range"]::-webkit-slider-runnable-track,
.colorValue .rgbaSetting input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
}

.colorValue .rgbaSetting.red input[type="range"]::-webkit-slider-runnable-track {
    background-color: #f00;
    height: 5px;
    border-radius: 5px;
    cursor: pointer;
}

.colorValue .rgbaSetting.red input[type="range"]::-webkit-slider-thumb {
    background-color: #f00;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -5px;
}

.colorValue .rgbaSetting.green input[type="range"]::-webkit-slider-runnable-track {
    background-color: #0f0;
    height: 5px;
    border-radius: 5px;
    cursor: pointer;
}

.colorValue .rgbaSetting.green input[type="range"]::-webkit-slider-thumb {
    background-color: #0f0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -5px;
}

.colorValue .rgbaSetting.blue input[type="range"]::-webkit-slider-runnable-track {
    background-color: #00f;
    height: 5px;
    border-radius: 5px;
    cursor: pointer;
}

.colorValue .rgbaSetting.blue input[type="range"]::-webkit-slider-thumb {
    background-color: #00f;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -5px;
}

.colorValue .rgbaSetting.alpha input[type="range"]::-webkit-slider-runnable-track {
    background-color: #999;
    height: 5px;
    border-radius: 5px;
    cursor: pointer;
}

.colorValue .rgbaSetting.alpha input[type="range"]::-webkit-slider-thumb {
    background-color: #999;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -5px;
}
</style>
