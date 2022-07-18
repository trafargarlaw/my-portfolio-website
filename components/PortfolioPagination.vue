<script setup>
const { data: projects } = await useFetch("/api/portfolio");
const selectedPage = ref(1);
const lastProject = projects.value.length;

const decrementSelectedProject = () => {
  if (selectedPage.value > 1) {
    selectedPage.value--;
  }
  console.log(selectedPage.value);
};
const incrementSelectedProject = () => {
  if (selectedPage.value < lastProject) {
    selectedPage.value++;
  }
  console.log(selectedPage.value);
};

const selectedProject = computed(() => {
  const project = projects.value[selectedPage.value - 1];
  return {
    id: project.id,
    name: project.name,
    description: project.description,
    image: project.image,
    link: project.link,
    github: project.github,
    tech: project.tech,
  };
});

//block-name__element-name_modification_name
</script>

<template>
  <div class="portfolio-pages">
    <img class="portfolio-pages__img" :src="selectedProject.image" alt="" />
    <div class="portfolio-pages__description">
      <span class="text-body">&lt;p&gt;</span>
      <div class="portfolio-pages__description__text">
        <h1 class="text-head">{{ selectedProject.name }}</h1>
        <p class="text-body">
          {{ selectedProject.description }}
        </p>
        <a
          class="github_link text-body"
          :href="selectedProject.github"
          target="_blank"
        >
          <img src="/images/link.svg" alt="Github Link Icon" />
          Github Repo
        </a>
      </div>
      <span class="text-body">&lt;/p&gt;</span>
    </div>
  </div>
  <app-wire-svg-2 />
  <div class="portfolio-pagination">
    <button
      class="portfolio-pagination__arrow"
      @click="decrementSelectedProject"
    >
      <img src="/images/left.svg" alt="left-arrow" />
    </button>
    <div class="portfolio-pagination__progress">
      <span
        v-for="project in projects"
        :key="project.id"
        :class="project.id == selectedPage ? 'active' : ''"
      ></span>
    </div>
    <button
      class="portfolio-pagination__arrow active"
      @click="incrementSelectedProject"
    >
      <img src="/images/right.svg" alt="right-arrow" />
    </button>
  </div>
</template>


<style lang="scss" scoped>
.portfolio-pages {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;

  &__img {
    border-radius: 50%;
    height: 245px;
    aspect-ratio: 1/1;
    border: 3px solid $gray;
    object-fit: cover;
  }

  &__description {
    margin-left: 2rem;
    padding: 2rem;
    text-align: left;

    &__text {
      margin: 1rem 0;

      & h1 {
        font-size: 32px;
        padding: 0 0.5rem;
        color: $dark-green;
      }

      & p {
        padding: 1rem 0.5rem 0 0.5rem;
      }

      & .github_link {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: $light-green;
        margin-top: 20px;
        column-gap: 0.2rem;
      }
    }

    & span {
      display: block;
      font-family: "Calling Code";
      font-size: 14px;
      margin: 0 0;
      color: $gray;
    }
  }
}

.portfolio-pagination {
  display: flex;
  column-gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  &__arrow {
    height: 42px;
    aspect-ratio: 1/1;
    border: 2px solid $gray;
    border-radius: 50%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      height: 10px;
    }

    &.active {
      height: 60px;

      & img {
        height: 14px;
      }
    }
  }

  &__progress {
    display: flex;
    width: 100%;

    & span {
      display: block;
      height: 8px;
      width: 100%;
      background: $dark-green;

      &.active {
        background: $light-green;
      }
    }
  }
}

@media (min-width: 768px) {
  .portfolio-pages {
    &__img {
      height: 445px;
    }

    &__description {
      &__text {
        & h1 {
          font-size: 40px;
          padding: 0 0.5rem;
          color: $dark-green;
        }

        & p {
          padding: 1rem 0.5rem 0 0.5rem;
          font-size: 26px;
          max-width: 38ch;
        }

        & .github_link {
          font-size: 26px;

          & img {
            height: 32px;
          }
        }
      }

      & span {
        font-size: 22px;
      }
    }
  }

  .portfolio-pagination {
    padding: 0 113px;
    column-gap: 4rem;

    &__arrow {
      height: 83px;

      & img {
        height: 19px;
      }

      &.active {
        height: 130px;

        & img {
          height: 30px;
        }
      }
    }
  }
}
</style>
