<template>
  <ElCard class="form-card">
    <ElForm
      :model="formData"
      ref="addItemForm"
      :rules="rules"
      label-position="top"
    >
      <ElFormItem label="Type" prop="type">
        <ElSelect
          class="type-select"
          v-model="formData.type"
          placeholder="Choose type..."
        >
          <ElOption label="Приход" value="INCOME" />
          <ElOption label="Расход" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    formData: {
      type: "INCOME",
      comment: "",
      value: 0,
    },
    rules: {
      type: [
        {
          required: true,
          message: "Пожалуйста, выберите тип записи",
          trigger: "blur",
        },
      ],
      comment: [
        {
          required: true,
          message: "Пожалуйста, выберите комментарий",
          trigger: "blur",
        },
      ],
      value: [
        {
          required: true,
          message: "Пожалуйста, выберите сумму",
          trigger: "blur",
        },
        {
          type: "number",
          message: "Пожалуйста, введите число",
          trigger: "blur",
        },
      ],
    },
  }),
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          this.$emit("submitForm", { ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      });
    },
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
  text-align: left;
}

.type-select {
  width: 100%;
}
</style>