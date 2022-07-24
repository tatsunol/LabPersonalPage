<template>
<div>
    <main class="main">
        <div class="article-wrapper">
            <article>
                <slot></slot>
            </article>
        </div>
    </main>
</div>  
</template>

<style lang="scss" scoped>
$padding: 16px;
$header-gray: #393939;

.main {
    width: 98%;
    min-height: 100px;
    background: $white_color;
    box-sizing: border-box;
    box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.1);
}

.main {
    .article-wrapper {
        padding: $padding
    }
    article {
        padding-left: 6px;
    }

    h2 {
        font-size: 1.5em;
        font-weight: bold;
        color: $white_color;
        margin: 16px 0 0 0;
        display: inline-block;
        padding: 6px 32px;
        margin-left: -$padding - 6px;
        background: $header-gray;
        border-left: 12px solid $primary_color;
    }

    ul {
        padding-left: 16px;
        line-height: 1.4;
    }

    p {
        padding-left: 16px;
    }


}
</style>