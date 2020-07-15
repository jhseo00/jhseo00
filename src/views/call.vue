
<template>
  <div id="wrap">
    <header id="header">header</header>
    <nav id="nav">nav</nav>
    <div id="content">
      <!-- 메인 컨텐츠 -->
      <div class="callCon">
        <!-- Left contents -->
        <div class="box leftCon">
          <div class="listBox">
            <div class="tab">
              <ul>
                <li>
                  <a>상담현황</a>
                </li>
                <li>
                  <a>예약현황</a>
                </li>
              </ul>
            </div>

            <div class="list">
              <div>
                <a>
                  <p>
                    8
                    <span>1</span>
                  </p>
                  <p>대기중</p>
                </a>
                <a>
                  <p>
                    8
                    <span>1</span>
                  </p>
                  <p>상담완료</p>
                </a>
                <a>
                  <p>
                    8
                    <span>1</span>
                  </p>
                  <p>상담이관</p>
                </a>
                <a>
                  <p>
                    8
                    <span>1</span>
                  </p>
                  <p>전체</p>
                </a>
              </div>
              <div>검색</div>

              <div>
                <div>
                  <ul>
                    <li>
                      <div class>
                        <dl>
                          <dt>
                            김덕배 고갱
                            <span>수신통화</span>
                          </dt>
                          <dd>010-1234-1234</dd>
                          <dd>오후 4:44</dd>
                          <dd>11:11:11</dd>
                        </dl>
                      </div>
                      <div class>
                        <p>대기중</p>
                        <span>서지혜</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="list" style="display:none;">예약현황 컨텐츠</div>
          </div>

          <div class="listBtm">
            <div class="tab">
              <ul>
                <li>
                  <a>상담 모니터링</a>
                </li>
                <li>
                  <a>다른 상담원 상태</a>
                </li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <li>
                  <dl>
                    <dt>총 통화</dt>
                    <dd>00:00:00</dd>
                  </dl>
                </li>
              </ul>
            </div>
            <div class="list" style="display:none;">다른 상담원 상태 컨텐츠</div>
          </div>
        </div>
        <!-- Middle contents -->
        <div class="box midCon">box2</div>

        <!-- Right contents -->
        <div class="box ritCon">
          <!-- 오른쪽 nav -->
          <div class="ritNav">
            <ul>
              <li>icon</li>
              <li>icon</li>
              <li>icon</li>
              <li>icon</li>
              <li>icon</li>
            </ul>
          </div>
          <!-- 고객정보 -->
          <div class="ritBox on">
            <div class="ritTit">
              고객정보
              <div class="close">
                <a>X</a>
              </div>
            </div>
            <!-- 일반정보 -->
            <div class="ritSubBox">
              <div class="subTit">일반정보</div>
              <div class="ritType0">
                <table>
                  <colgroup>
                    <col style />
                    <col style />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>이름</th>
                      <td>
                        <input type="text" />
                      </td>
                    </tr>
                    <tr>
                      <th>전화번호</th>
                      <td>
                        <input type="text" />
                      </td>
                    </tr>
                    <tr>
                      <th>이메일</th>
                      <td>
                        <input type="text" />
                      </td>
                    </tr>
                    <tr>
                      <th>클레임정보</th>
                      <td>
                        <input type="text" />
                      </td>
                    </tr>
                    <tr>
                      <th>생년월일</th>
                      <td>
                        <input type="text" />
                      </td>
                    </tr>
                    <tr>
                      <th>성별</th>
                      <td>
                        <input type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <textarea></textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="ritBtn">
                  <button>저장</button>
                </div>
              </div>
            </div>
            <!-- // 일반정보 -->

            <!-- 상담내역 -->
            <div class="ritSubBox">
              <div class="subTit">상담이력</div>
              <div class="ritType1">
                <div class="subTopTit">상담내용</div>
                <ul>
                  <li>
                    <dl>
                      <dt>배송문의 > 배송지연 > 취소요청</dt>
                      <dd
                        class="text"
                      >ㅁ 주문번호 20200001- 000001 - 고객명 : 홍길동 - 연락처 : 010-1234-1234 - 상담내용 : 주문한지 10일 지났으나 배송지연으로 취소요청</dd>
                      <dd class="date">2020-06-13 17:46:22</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>배송문의 > 배송지연 > 취소요청</dt>
                      <dd
                        class="text"
                      >ㅁ 주문번호 20200001- 000001 - 고객명 : 홍길동 - 연락처 : 010-1234-1234 - 상담내용 : 주문한지 10일 지났으나 배송지연으로 취소요청</dd>
                      <dd class="date">2020-06-13 17:46:22</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>배송문의 > 배송지연 > 취소요청</dt>
                      <dd
                        class="text"
                      >ㅁ 주문번호 20200001- 000001 - 고객명 : 홍길동 - 연락처 : 010-1234-1234 - 상담내용 : 주문한지 10일 지났으나 배송지연으로 취소요청</dd>
                      <dd class="date">2020-06-13 17:46:22</dd>
                    </dl>
                  </li>
                </ul>
              </div>
            </div>
            <!-- // 상담내역 -->

            <!-- 관리메모 -->
            <div class="ritSubBox">
              <div class="subTit">관리메모</div>
              <div class="ritType2">
                <div class="subTopTit">상담내용</div>
                <ul>
                  <li>
                    <dl>
                      <dt>클레임 정도 상 -> 하로 하향 단, 세심한 관리 필요</dt>
                      <dd>2020-06-13 137:46:22</dd>
                      <dd>
                        작성자
                        <span>서재 상담사</span>
                      </dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>클레임 정도 상 -> 하로 하향 단, 세심한 관리 필요</dt>
                      <dd>2020-06-13 137:46:22</dd>
                      <dd>
                        작성자
                        <span>서재 상담사</span>
                      </dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>클레임 정도 상 -> 하로 하향 단, 세심한 관리 필요</dt>
                      <dd>2020-06-13 137:46:22</dd>
                      <dd>
                        작성자
                        <span>서재 상담사</span>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </div>
            </div>
            <!-- // 관리메모 -->
          </div>
          <!-- // 고객정보 -->

          <!-- 주문정보 -->
          <div class="ritBox">
            <div class="ritTit">주문정보</div>
          </div>
          <!-- // 주문정보 -->
        </div>
        <!-- //Right -->
      </div>
      <!-- // 실제 사용 될 마크업 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Call',
  data () {
    return {}
  }
}
</script>

<style lang="css">
/* reset */
/* base */
body,
input,
textarea,
select,
button,
table {
  font-size: 12px;
  color: #333;
}
* {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%;
}
ul,
ol,
li {
  list-style: none;
}
fieldset,
img {
  border: 0;
  vertical-align: top;
}
address {
  font-style: normal;
}
table {
  border-collapse: collapse;
}
header,
footer,
nav,
section,
article,
hgroup,
aside {
  display: block;
}
p,
li,
dd {
  line-height: 1.5em;
  text-align: justify;
}
.hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  left: -1000%;
  color: #fff;
}

/* a-style */
a {
  color: #333;
  text-decoration: none;
}
a:hover,
a:active,
a:focus {
  color: #333;
  text-decoration: none;
}
</style>

<style lang="scss">
body {
  height: 100%;
}
#wrap {
  position: relative;
  height: 100%;
  #header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    border: 1px solid #000;
  }
  #nav {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 80px;
    width: 100px;
    height: 100%;
    border: 1px solid #000;
  }
  #content {
    position: relative;
    padding: 80px 0 0 100px;
    height: 100%;
    border: 1px solid #000;
  }
  .callCon {
    display: table;
    width: 100%;
    height: 100%;
    .box {
      width: 33.33%;
      float: left;
      border: 1pxs solid #000;
    }
    .ritCon {
      position: relative;
      padding-right: 65px;
      height: 100%;
      .ritNav {
        position: absolute;
        top: 0;
        right: 0;
        width: 65px;
        height: 100%;
        border-left: 1px solid #dfe3e8;
        background-color: #f9f9f9;
      }
      .ritBox {
        display: none;
        &.on {
          display: block;
        }
        .ritTit {
          position: relative;
          padding: 0 0 0 40px;
          font-size: 18px;
          line-height: 52px;
          font-weight: bold;
          color: #121212;
          border-bottom: 1px solid #dfe3e8;
          .close {
            position: absolute;
            top: 0;
            right: 10px;
            a {
              display: inline-block;
              padding: 0 10px;
              line-height: 30px;
            }
          }
        }
        .subTit {
          position: relative;
          padding: 0 0 0 47px;
          font-size: 14px;
          line-height: 45px;
          font-weight: bold;
          color: #121212;
          border-bottom: 1px solid #dfe3e8;
        }
        .subTopTit {
          font-size: 14px;
          line-height: 40px;
          font-weight: bold;
          text-align: center;
          color: #666c84;
          border-top: 1px solid #c4cdd5;
          border-bottom: 1px solid #c4cdd5;
          background-color: #f0f0fa;
        }
      }
    }
  }
}
</style>
