<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__content_head">
        <h1>Password</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </div>
      <hr />

      <div class="modal__password">
        <input type="text" />
      </div>

      <div class="modal__buttons">
        <button>Download</button>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  closeModal: (payload: MouseEvent) => void;
}

defineProps<Props>();
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  & hr {
    background: $light-green;
    border-color: $light-green;
  }

  &__content {
    background: $primary-bg;
    padding: 2rem;
    margin: 0 1rem;

    &_head {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      font-family: "Code Squared";
      gap: 1rem;
      color: $light-green;

      & svg {
        height: 2rem;
        width: 2rem;
      }
    }
  }

  &__password {
    display: flex;
    margin-top: 2rem;
    gap: 1rem;

    & input {
      height: 4rem;
      border: 1px solid $light-green;
      font-size: 4rem;
      text-align: center;
      line-height: 1.5;
      border-radius: 8px;
      outline: none;
      width: 100%;
    }
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

    & button {
      height: 3rem;
      border: 1px solid $light-green;
      font-size: 1.5rem;
      text-align: center;
      line-height: 1.5;
      border-radius: 8px;
      outline: none;
      padding: 0 1rem;
      cursor: pointer;
      font-family: "Calling Code";
      background: $light-green;
    }
  }
}

@media (min-width: 768px) {
  .modal {
    &__content {
      &_head {
        font-size: 2rem;
      }

      & svg {
        height: 3rem;
        width: 3rem;
      }
    }

    &__buttons {
      height: 4rem;
      font-size: 2rem;
    }
  }
}
</style>