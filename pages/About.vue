<template>
  <div class="about-div-aboutContainer">
    <div class="about-div-profileContainer">
      <div class="about-div-profileLeft">
        <div class="about-div-captionContainer">
          <h2 class="about-h2-captionText">PROFILE</h2>
        </div>
        <div class="about-div-introduceText">
          <p>
            UI/UXデザイナー兼フロントエンドエンジニアです。
          </p>
          <p>
            Web/アプリのデザインやLPの実装、APIの実装などが出来ます。
            <br />
          </p>
          <p>
            自分が考えたものを作ってる瞬間が大好きです。
          </p>
          <p>デザイナーやフロントエンジニアのバイトやインターンを探しています。</p>
        </div>
        <div class="about-div-links">
          <div class="about-div-link">
            <h4 class="about-div-linkTitle">Twitter</h4>
            <div class="about-div-linkLine Twitter" />
          </div>
          <div class="about-div-link">
            <h4 class="about-div-linkTitle">Github</h4>
            <div class="about-div-linkLine Github" />
          </div>
          <div class="about-div-link">
            <h4 class="about-div-linkTitle">Behance</h4>
            <div class="about-div-linkLine Behance" />
          </div>
        </div>
      </div>
      <img src="../static/me2.svg" alt="It's me" class="about-img-me" />
    </div>
    <div class="about-div-skillsContainer">
      <div
        class="about-div-captionContainer skills"
        :style="{ borderColor: colors.hex }"
      >
        <h2 class="about-h2-captionText">SKILLS</h2>
      </div>
      <div class="about-div-boxes">
        <div class="about-div-box" v-for="skill in skills" :key="skill">
          <p class="about-p-boxText">{{ skill }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/base";

.about-div-aboutContainer {
  color: var(--color);
  border-color: var(--color);
  @include pc {
    margin: 0 0 0 53px;
    .about-div-profileContainer {
      display: flex;
      justify-content: space-between;
    }
  }
}
.about-div-captionContainer {
  @include pc {
    width: 295px;
    height: 59px;
    border: solid 3px;
    margin: 30px 0 0 0;
    &.skills {
      margin: 70px 0 0 0;
    }
  }
}
.about-h2-captionText {
  @include pc {
    font-size: 28px;
    margin: 13.5px 0 0 0;
    text-align: center;
  }
}
.about-div-introduceContainer {
  @include pc {
    margin: 50px 0 0 0;
    display: flex;
  }
}
.about-div-introduceText {
  text-align: left;
  @include pc {
    p {
      margin: 45px 0 0 6px;
      line-height: 45px;
    }
  }
}
.about-div-links {
  display: flex;
  @include pc {
    margin: 50px 0 0 0;
    .about-div-link {
      letter-spacing: 0.05em;
      margin: 0 75px 0 0;
      .about-div-linkLine {
        display: block;
        height: 2px;
        &.Twitter {
          width: 88px;
        }
        &.Github {
          width: 90px;
        }
        &.Behance {
          width: 120px;
        }
      }
    }
  }
}
.about-img-me {
  margin: 40px 56px 0 40px;
  height: 410px;
}
.about-div-boxes {
  display: flex;
  flex-wrap: wrap;
  @include pc {
    margin: 30px 35px 100px -25px;
    .about-div-box {
      margin: 20px 0 0 25px;
      border: solid 2px;
      width: 171px;
      height: 56px;
      .about-p-boxText {
        margin: 18px 0 0 0;
        font-size: 20px;
      }
    }
  }
}
.about-div-linkLine {
  background-color: var(--color);
}

// 読み込み時アニメーション
// @keyframes loaded {
//   0%{}
//   100%{}
// }
</style>
<script>
import { store } from "../store/store";
export default {
  name: "About",
  data: function() {
    return {
      skills: [
        "HTML/CSS",
        "JavaScript",
        "TypeScript",
        "Python",
        "Scss",
        "Vue",
        "Vuex",
        "AWS",
        "XD",
        "Figma",
        "Sketch",
        "Node.js"
      ]
    };
  },
  computed: {
    colors() {
      return store.colors;
    }
  }
};
</script>
