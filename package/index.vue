<template>
    <span
        :class="'material-icon ' + className"
        :style="style"
        @click="$emit('click')"
    >{{ icon }}</span>
</template>
<script>
    export default {
        name: "mf-icon",
        props: {
            theme: {
                type: String,
                default: "filled",
                validator: (theme) => {
                    return ["filled", "round", "twoTone", "outline"].includes(
                        theme
                    );
                },
            },
            icon: {
                type: String,
                required: true,
            },
            size: {
                type: String,
                default: "24px",
            },
            color: {
                type: String,
                default: "#000",
            },
        },
        computed: {
            style() {
                const { size, color } = this;
                return {
                    fontSize: size,
                    color,
                };
            },
            className() {
                return `material-${this.theme}`;
            },
        },
    };
</script>
