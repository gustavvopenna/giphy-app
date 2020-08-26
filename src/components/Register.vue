<template>
  <div>
    <h1 class="text-gray-800 font-bold text-xl">¡Registrate!</h1>
    <div>
      <AppInput type="email" placeholder="Email" v-model="email" />
      <AppInput type="password" placeholder="Contraseña" v-model="password" />
      <AppButton class="mt-8" @click.native="validate">Crear cuenta</AppButton>
      <div
        v-if="validationErrors.length > 0"
        class="mt-4 bg-red-600 bg-opacity-75 text-white font-medium"
      >
        <ul>
          <li v-for="(error, i) in validationErrors" :key="`register-error-${i}`">{{error}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//Libraries
import { mapActions, mapMutations } from "vuex";

// Componentes
import AppInput from "@/components/AppInput";
import AppButton from "@/components/AppButton";

export default {
  name: "Register",
  components: {
    AppInput,
    AppButton
  },
  data() {
    return {
      email: null,
      password: null,
      validationErrors: []
    };
  },
  methods: {
    ...mapActions(["registerAction"]),
    ...mapMutations([
      "setdisplayPopup",
      "setRegisterRequested",
      "setLoginRequested"
    ]),
    register() {
      this.registerAction({ email: this.email, password: this.password }).then(
        () => {
          this.setdisplayPopup(false);
          this.setLoginRequested(false);
          this.$toast.success("Cuenta creada exitosamente!", {
            position: "bottom-right"
          });
        }
      );
    },
    validate() {
      this.cleanErrors();

      if (!this.email) this.validationErrors.push("Ingresa un correo");
      if (!this.password) this.validationErrors.push("Ingresa un password");
      if (this.password.length < 4)
        this.validationErrors.push(
          "Tu password debe contener al menos 4 caracteres"
        );

      // If there's no errors, then register user
      if (this.validationErrors.length <= 0) {
        this.register();
      }
    },
    cleanErrors() {
      this.validationErrors = [];
    }
  }
};
</script>
