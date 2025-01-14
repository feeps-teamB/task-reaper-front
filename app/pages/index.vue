<template>
    <main class="landing-container">
      <header class="header">
        <nav class="navigation">
            <img
              loading="lazy"
              src="../static/images/icon.png"
              class="brand"
              alt="Task Reaper Logo"
            />

          <div class="nav-links">
            <a href="#learn" class="nav-link">Learn More</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>
          <div class="auth-links">
            <a href="/login" class="auth-link login-link">Login</a>
            <a href="/signup" class="auth-link signup-link">Signup</a>
          </div>
        </nav>
      </header>
      <section class="hero-section">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0880341d7ce3efe2d49721da222751f2372735e812c2a98acc566e9587bbb8b?placeholderIfAbsent=true&apiKey=37f273673bad4412bbe7062a6725c33c"
          class="hero-image"
          alt="Task Reaper Hero Banner"
        />
      </section>
      <iframe style="border: 1px solid rgba(0, 0, 0, 0.1); position: absolute; top: 380px; left: 830px;" width="510" height="380" src="https://embed.figma.com/proto/PjzjpL38bKyQR1XsqGzepq/TASK-REAPER?node-id=25-2259&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=25%3A2259&show-proto-sidebar=0&embed-host=share" allowfullscreen></iframe>
      <div>
    <p>リンク置き場</p>
    <nuxt-link to="/scheduleDetail/1" class="schedule-link">スケジュール1詳細</nuxt-link>
    <br/>
    <nuxt-link to="/scheduleDetail/5" class="schedule-link">スケジュール5詳細</nuxt-link>
    <br/>
    <br/>
    <nuxt-link to="/categoryDetail/1" class="schedule-link">カテゴリ1詳細</nuxt-link>
    <br/>
    <nuxt-link to="/categoryDetail/5" class="schedule-link">カテゴリ2詳細</nuxt-link>
    <br/>
    <br/>
    <nuxt-link to="/teamDetail/1" class="schedule-link">チーム1詳細</nuxt-link>
    <br/>
    <nuxt-link to="/teamDetail/2" class="schedule-link">チーム2詳細</nuxt-link>
    <br/>
    <br/>
    <nuxt-link to="/addSchedule/1" class="schedule-link">スケジュール追加</nuxt-link>
    <br/>
    <br/>
    <nuxt-link to="/teamSelectSchedule/1" class="schedule-link">チーム選択</nuxt-link>
    <br/>
    <nuxt-link to="/teamSelectCategory/1" class="schedule-link">チーム選択</nuxt-link>
  </div>
    </main>
</template>

<style scoped>
.landing-container {
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.header {
  background: #7FA08B;
  width: 100%;
  padding: 20px 23px;
}

.navigation {
  display: flex;
  gap: 15px;
}

.brand {
  color: #2F5E39;
  text-align: center;
  font: 700 28px Inter, sans-serif;
}

.logo {
  aspect-ratio: 1.06;
  object-fit: contain;
  width: 90px;
  align-self: start;
}

/* .brand-name {
  flex-grow: 1;
  width: 170px;
  margin: auto 0;
  font: inherit;
} */

.nav-links {
  display: flex;
  align-self: stretch;
  color: #E3EBF6;
  text-align: center;
  margin: auto 0;
  font: 700 28px Inter, sans-serif;
  flex: 1;
}

.nav-link {
  text-shadow: 4px 4px 4px rgba(47, 71, 94, 0.5);
  flex: 1;
  text-decoration: none;
  color: inherit;
}

.auth-links {
  display: flex;
  gap: 15px;
  align-self: stretch;
  text-align: center;
  margin: auto 0;
  font: 700 28px Inter, sans-serif;
  flex: 1;
}

.auth-link {
  text-shadow: 4px 4px 4px rgba(47, 71, 94, 0.5);
  flex: 1;
  text-decoration: none;
}

.login-link {
  color: #2F5E39;
}

.signup-link {
  color: #E3EBF6;
}

.hero-section {
  position: relative;
  min-height: 708px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 160px 60px;
}

.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;  /* 画像の幅を調整 */
  object-fit: cover;
}
</style>

