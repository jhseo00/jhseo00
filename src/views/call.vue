<template>
  <div id="wrap">
    <div id="header">
      <div class="menu"></div>
      <h1 class="logo"></h1>
    </div>
    <div id="nav">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div id="callCon">
      <!-- 리스트 -->
      <div class="listCon">
        <div class="listBox">
          <div class="tab">
            <ul>
              <li><a href="#">상담현황</a></li>
              <li><a href="#">예약현황</a></li>
            </ul>
          </div>
            <div class="list">
              <ul>
                <li><a href="#">대기중</a></li>
                <li><a href="#">상담완료</a></li>
                <li><a href="#">전체</a></li>
              </ul>
            </div>
            <div>예약현황 컨텐츠</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'call',
  data () {
    return {
    }
  }
}
</script>

<style>
/* reset */
/* base */
body,input,textarea,select,button,table{font-size:12px; color: #333;}
*{margin:0;padding:0}
h1,h2,h3,h4,h5,h6{font-weight:normal;font-size:100%}
ul,ol,li{list-style:none}
fieldset,img{border:0; vertical-align:top;}
address{font-style:normal}
table{border-collapse: collapse}
header,footer,nav,section,article,hgroup,aside{display: block}
p,li,dd{line-height: 1.5em; text-align: justify}
.hidden{position: absolute; width: 1px; height: 1px; overflow: hidden; left: -1000%; color: #fff}

/* a-style */
a{color:#333;text-decoration:none}
a:hover,a:active,a:focus{color:#333;text-decoration:none}

/* layout */
#wrap{position: relative;}
#wrap #header{position: absolute;top: 0;left: 0;width: 100%;height: 80px; border: 1px solid #000;}
#wrap #nav{position: absolute;top: 80px;left: 0;width: 100px;height: 500px;border: 1px solid #000;}
#wrap #callCon{position: absolute; top: 80px;left: 100px;width: 100%; height: 500px; border: 1px solid #000;}
#wrap #callCon .box{float: left; width: 33.33%;height: 100%; border: 1px solid #000;}

</style>
