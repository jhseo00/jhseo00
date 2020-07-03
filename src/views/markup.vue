<template>
  <div id="wrap">
    <div id="header">
      <div class="con">
        <div class="box box1"><a href="#"><img src="https://www.seaharvest.net.au/wp-content/themes/seaharvest/img/logo/logo_bold.svg" alt="logo"></a></div>
        <div class="box box2">
          <div class="date">THURSDAY, JULY 2, 2020</div>
          <div class="title">SEA HARVEST</div>
          <div class="subtitle">FRESH SEAFOOD MARKET</div>
        </div>
        <div class="box box3">
          <div class="menu1">Belconnen Markets</div>
          <div class="menu2">Fyshwick Markets</div>
        </div>
      </div>
    </div>
    <div id="nav">
      <ul>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">PRODUCTS</a></li>
        <li><a href="#">CONTACT</a></li>
        <li><a href="#">ORDER</a></li>
      </ul>
    </div>
    <div id="content">
      <div class="con">
        <div class="box">1</div>
        <div class="box">2</div>
      </div>
      <div class="con">
        <div class="box">3</div>
        <div class="box">4</div>
      </div>
      <div class="con">
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
      </div>
    </div>
    <div id="footer">
      <div class="con">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'markup',
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
body{padding: 0 20px;margin: 30px 50px;}
#wrap{border: 1px solid #000;}
#wrap{border: 1px solid #000;}

#wrap .con{width: 100%; display: table;}
#wrap .con .box{display: table-cell; height: 100%; border: 1px solid #000;}
#wrap .con .box1{width: 20%;}
#wrap .con .box2{width: 60%; text-align: center;}
#wrap .con .box3{width: 20%; text-align: center;}
#header .con a{display: block;}
#nav ul{display: block;}
#nav ul li{float: left; text-align: center; list-style: none; width: 25%; border: 1px solid #000;}
#nav ul li a{display: block;}
/* #footer{ } */
</style>
