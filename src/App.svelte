<script>
  import { onMount } from "svelte";
  import { styleFirstItem, styleItem, convertToArray } from "./lib/utils";

  let mainContainer;
  let logoContainer;
  let articlesContainer;
  let thumbnailsContainer;

  let divider;
  let divider1;
  let divider2;

  // DATA TO BE FETCHED/PREFETCHED FROM API
  let articles = [
    {
      headline: "At long, long last, Covid is yesterday’s news",
      thumbnail: "0",
    },
    {
      headline:
        "Moral Money ‘My wife’s an eco-warrior but I’ve invested her Isa in oil stocks’",
      thumbnail: "1",
    },
    {
      headline: "Planet normal ‘Levelling up’ is still just a canny slogan’",
      thumbnail: "2",
    },
    {
      headline: "Planet normal ‘Levelling up’ is still just a canny slogan’",
      thumbnail: "3",
    },
    {
      headline: "Planet normal ‘Levelling up’ is still just a canny slogan’",
      thumbnail: "4",
    },
    {
      headline: "Planet normal ‘Levelling up’ is still just a canny slogan’",
      thumbnail: "5",
    },
    {
      headline: "Planet normal ‘Levelling up’ is still just a canny slogan’",
      thumbnail: "6",
    },
    {
      headline:
        "The truth about Starmer video Fifth of slurs were about Savile but more shouted traitor",
      thumbnail: "7",
    },
    {
      headline:
        "‘I can’t get a refund on my cancelled Elton John concert ticket’",
      thumbnail: "8",
    },
    {
      headline:
        "‘I can’t get a refund on my cancelled Elton John concert ticket’",
      thumbnail: "9",
    },
    {
      headline:
        "‘I can’t get a refund on my cancelled Elton John concert ticket’",
      thumbnail: "10",
    },
    {
      headline:
        "‘I can’t get a refund on my cancelled Elton John concert ticket’",
      thumbnail: "11",
    },
    {
      headline:
        "‘I can’t get a refund on my cancelled Elton John concert ticket’",
      thumbnail: "12",
    },
    {
      headline:
        "‘I can’t get a refund on my cancelled Elton John concert ticket’",
      thumbnail: "13",
    },
  ];

  let thumbnails = articles.map((article) => article.thumbnail).reverse();

  onMount(() => {
    const articleElements = convertToArray(articlesContainer.children);
    const maxScrollDistance =
      thumbnailsContainer.scrollHeight - thumbnailsContainer.clientHeight;

    // SCROLL TO TOP AND 'SELECT' FIRST HEADLINE
    articlesContainer.scrollTo(0, 0);
    styleFirstItem(articleElements, false);

    // CENTER FIRST ITEM (USING PADDING TO ALLOW UPWARDS SCROLL SPACE)
    articlesContainer.style.paddingTop = `${
      mainContainer.clientHeight / 2 - logoContainer.clientHeight
    }px`;

    // CHANGE BELOW CODE
    // scroll thumbnail position to 'bottom', so that we can scroll up
    thumbnailsContainer.scrollTop = maxScrollDistance;
  });

  const handleScroll = () => {
    const articleElements = convertToArray(articlesContainer.children);
    const scrollDistance = articlesContainer.scrollTop;

    // SETTING STYLES TO LIST ITEMS
    setTimeout(() => {
      scrollDistance === 0
        ? styleFirstItem(articleElements, true)
        : articleElements.map((article) => {
            const articleOffsetTop = article.offsetTop - scrollDistance;

            articleOffsetTop >= 125 &&
              articleOffsetTop < 175 &&
              styleItem(articleElements, article);
          });
    }, 100);
    // CONTROLLING THUMBNAILS SCROLL
    thumbnailsContainer.scrollTop =
      thumbnailsContainer.scrollTopMax - scrollDistance * 2;
  };
</script>

<main bind:this={mainContainer}>
  <!-- <div bind:this={divider} class="divider" />
  <div bind:this={divider1} class="divider1" />
  <div bind:this={divider2} class="divider2" /> -->

  <div bind:this={logoContainer} class="logo-container">
    <a href="https://www.telegraph.co.uk/">
      <svg
        width="132"
        height="22"
        viewBox="0 0 132 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.12602 10.4924C1.12602 7.62622 3.27569 5.63009 5.32299 4.7088L5.52772 4.96472C4.75998 5.78364 4.19698 6.60256 4.19698 8.29159C4.19698 10.2877 4.7088 11.6185 5.57891 12.5398C5.886 12.2327 6.03955 11.7208 6.03955 11.3114V8.49632L9.67352 5.886L9.87825 6.14192C9.57115 6.60256 9.36642 7.01202 9.36642 7.6774V9.41761C9.36642 10.7995 7.21675 12.1303 5.83482 12.7445C6.70492 13.5634 7.88213 13.8705 9.21287 13.8705C9.7247 13.8705 10.2365 13.8705 10.646 13.7681V5.63009C9.51997 5.57891 8.49632 5.27181 7.52385 5.0159C6.39783 4.7088 4.91353 4.29934 3.94106 4.29934C2.50795 4.29934 0.767739 4.75999 0.767739 6.85848C0.767739 7.06321 0.767739 7.26794 0.818922 7.47267L0.460644 7.57503C0.153548 6.96084 0 6.29547 0 5.68127C0 3.07096 1.84257 0.818921 4.91353 0.818921C6.14192 0.818921 7.67739 1.22838 8.70105 1.53548C9.82706 1.84257 10.9531 2.14967 12.0791 2.14967C12.6421 2.14967 12.9492 1.84257 12.9492 1.33075C12.9492 0.818921 12.6933 0.563008 12.2326 0.460642L12.2838 0.102364C13.6146 0.358277 15.0477 1.12602 15.0477 2.76386C15.0477 4.7088 13.6146 5.68127 11.209 5.68127H11.0043V13.717C12.4886 13.4099 13.5122 12.6933 14.28 11.4649L14.587 11.6185C13.7681 14.3823 11.5673 17.095 7.88213 17.095C4.14579 17.095 1.12602 14.9453 1.12602 10.4924Z"
          fill="#222222"
        />
        <path
          d="M17.1974 19.2447C19.5518 19.04 21.9062 18.4258 21.9062 15.9178V8.13804L20.8825 7.11439L19.7053 8.18923V14.0752L20.6778 14.9453L18.4769 16.9415H18.221L16.0202 15.0477L16.6344 14.4335V2.50795C16.6344 1.63784 15.8666 1.1772 15.3548 1.02365V0.767739C15.5595 0.665374 15.8666 0.563009 16.3273 0.563009C17.095 0.563009 17.8116 1.02365 18.0163 1.4843H18.0675C18.5281 0.870105 19.2447 0.563009 19.91 0.563009C20.1148 0.563009 20.3707 0.563009 20.6778 0.665374V1.02365C20.2683 1.07484 19.7053 1.58666 19.7053 2.71268V7.57503L22.5715 4.86235H22.8275C23.0322 5.06708 24.3629 6.24428 24.5677 6.39783C24.67 6.44902 24.8236 6.5002 24.9259 6.5002C25.1819 6.5002 25.3354 6.44902 25.5401 6.29547V6.80729C25.3354 7.01202 25.0283 7.3703 25.0283 7.88213V14.4847C25.0283 17.5045 21.7014 19.347 17.1974 19.6541V19.2447Z"
          fill="#222222"
        />
        <path
          d="M30.0442 11.1066L32.1427 9.67352C31.4261 8.8546 30.6584 7.9845 30.0442 7.31912V11.1066ZM26.9221 7.62622C28.2528 6.96084 30.1466 5.83482 31.4773 4.91354H31.7332C32.6033 5.78364 33.7805 7.16557 34.8554 8.08686V8.39396L30.0442 11.5673V13.4099C30.556 13.717 31.938 14.3823 32.7569 14.6894L34.753 12.7445L35.0089 13.0516L31.119 16.9415H30.8119C29.5324 16.3785 27.7922 15.6619 26.6661 15.0477C26.8709 14.5871 26.9732 13.6146 26.9732 12.3862V7.62622H26.9221Z"
          fill="#222222"
        />
        <path
          d="M41.9698 10.4413C41.9698 7.57503 44.1194 5.57891 46.1667 4.65762L46.3715 4.91354C45.6037 5.73246 45.0407 6.55138 45.0407 8.24041C45.0407 10.2365 45.5525 11.5673 46.4226 12.4886C46.7297 12.1815 46.8833 11.6696 46.8833 11.2602V8.44514L50.5173 5.83482L50.722 6.09074C50.4149 6.55138 50.2102 6.96084 50.2102 7.62622V9.36643C50.2102 10.7484 48.0605 12.0791 46.6786 12.6933C47.5487 13.5122 48.7259 13.8193 50.0566 13.8193C50.5684 13.8193 51.0291 13.8193 51.4897 13.717V5.57891C50.3637 5.52773 49.3401 5.22063 48.3676 4.96472C47.2416 4.65762 45.7573 4.24816 44.7848 4.24816C43.3517 4.24816 41.6115 4.70881 41.6115 6.80729C41.6115 7.01203 41.6115 7.21676 41.6627 7.42149L41.3044 7.52385C41.0485 6.85848 40.9461 6.24429 40.9461 5.57891C40.9461 2.9686 42.7887 0.716557 45.8596 0.716557C47.1392 0.716557 48.6235 1.12602 49.6983 1.43311C50.8244 1.74021 51.9504 2.04731 53.0764 2.04731C53.6394 2.04731 53.9465 1.74021 53.9465 1.22838C53.9465 0.716557 53.6906 0.460644 53.2299 0.358279L53.2811 0C54.6119 0.255913 56.045 1.02365 56.045 2.6615C56.045 4.60644 54.6119 5.57891 52.2063 5.57891H52.0016V13.6146C53.4858 13.3075 54.5095 12.5909 55.2772 11.3626L55.5843 11.5161C54.7654 14.28 52.5646 16.9926 48.8794 16.9926C45.0407 17.0438 41.9698 14.9453 41.9698 10.4413Z"
          fill="#222222"
        />
        <path
          d="M59.9861 11.1066L62.0845 9.67352C61.368 8.8546 60.6002 7.9845 59.9861 7.31912V11.1066ZM56.8639 7.57503C58.1947 6.90966 60.0884 5.78364 61.4192 4.86235H61.6751C62.5452 5.73246 63.7224 7.11439 64.7972 8.03568V8.34278L59.9861 11.5161V13.3587C60.4979 13.6658 61.8798 14.3311 62.6987 14.6382L64.6437 12.6933L64.8996 13.0004L60.9585 16.8391H60.6514C59.3719 16.2761 57.6317 15.5595 56.5056 14.9453C56.7104 14.4847 56.8127 13.5122 56.8127 12.2838V7.57503H56.8639Z"
          fill="#222222"
        />
        <path
          d="M69.3525 2.09849V13.8193C69.3525 14.28 69.8131 14.6894 70.2738 14.7918L71.0415 14.0752L71.2974 14.3823L68.7383 16.9415H68.5335C67.5611 16.7879 66.2303 15.969 66.2303 14.4335V3.58279L65.6161 2.91741L64.8484 3.68515L64.4901 3.42924L67.3563 0.511827H67.6123L69.3525 2.09849Z"
          fill="#222222"
        />
        <path
          d="M75.4432 11.1066L77.5417 9.67352C76.8251 8.8546 76.0574 7.9845 75.4432 7.31912V11.1066ZM72.3211 7.57503C73.6518 6.90966 75.5456 5.78364 76.8763 4.86235H77.1322C78.0023 5.73246 79.1795 7.11439 80.2544 8.03568V8.34278L75.4432 11.5161V13.3587C75.955 13.6658 77.337 14.3311 78.1559 14.6382L80.152 12.6933L80.4079 13.0004L76.4669 16.8391H76.1598C74.8802 16.2761 73.14 15.5595 72.014 14.9453C72.2187 14.4847 72.3211 13.5122 72.3211 12.2838V7.57503Z"
          fill="#222222"
        />
        <path
          d="M86.7034 14.1776V8.18923L84.5025 7.21676V14.0241L85.8845 14.9453L86.7034 14.1776ZM81.3804 15.0989V7.62622L85.3214 4.86235H85.6285C86.5498 5.27181 88.9042 6.29547 89.1601 6.44902C89.2625 6.5002 89.4161 6.55138 89.5696 6.55138C89.7743 6.55138 90.0303 6.44902 90.3374 6.34665V6.85848C90.1326 7.06321 89.8255 7.47267 89.8255 7.83095V14.0241C89.8255 15.4572 90.1326 16.3273 90.6956 16.9415V17.2486C89.8767 18.1187 87.8806 20.2683 86.9593 21.3432H86.7546C85.9356 20.8825 84.5025 20.5243 83.3253 20.5243C82.4552 20.5243 81.4827 20.729 80.715 21.3432L80.4591 21.1384C81.1245 19.5518 82.6088 17.9651 84.4513 17.9651C85.5774 17.9651 87.0105 18.4258 88.3412 19.1423C87.4711 18.1698 86.7034 16.2761 86.6522 14.843L84.4513 17.0438H84.1954L81.3804 15.0989Z"
          fill="#222222"
        />
        <path
          d="M96.0698 8.13804V13.8193C96.0698 14.28 96.5304 14.6894 96.9911 14.7918L97.7588 14.0752L98.0147 14.3823L95.4556 16.9415H95.302C94.3296 16.7879 92.9988 15.969 92.9988 14.4335V7.93331L92.3846 7.26794L91.5657 8.03568L91.2586 7.77977L94.1248 4.86235H94.3808L96.121 6.55138V7.47267L98.3218 4.86235H98.5777C99.0384 5.323 99.7038 5.98837 100.369 6.44902V6.5002L98.4754 8.75224H98.4242C97.9124 8.29159 97.247 7.6774 96.8375 7.31912L96.0698 8.13804Z"
          fill="#222222"
        />
        <path
          d="M105.692 10.2877V8.49632L102.57 6.85848C102.314 7.06321 101.495 7.57503 101.188 7.72858C101.956 8.75223 103.901 9.82707 105.692 10.2877ZM103.542 9.82707V14.2288L104.822 14.9965L105.641 14.2288V10.7995C103.747 10.2877 101.546 9.05933 100.676 7.93331V7.62622C102.314 6.70493 103.491 5.83482 104.464 4.96472H104.72C104.72 4.96472 107.995 6.5002 108.098 6.55138C108.251 6.65375 108.405 6.70493 108.61 6.70493C108.814 6.70493 109.019 6.65375 109.275 6.5002V7.06321C109.019 7.21675 108.763 7.52385 108.763 8.03568V13.7681C108.763 14.3823 109.275 14.7406 109.684 14.843L110.452 14.1264L110.708 14.4335L108.149 16.9926H107.944C106.921 16.7367 105.948 15.8154 105.692 14.7406L103.389 16.9415H103.184L100.42 15.1501V11.6696C101.086 11.209 102.468 10.2365 103.184 9.7247L103.542 9.82707Z"
          fill="#222222"
        />
        <path
          d="M117.72 14.3823V8.08686L116.696 7.06321L115.519 8.13804V13.9217C116.287 14.1264 117.311 14.28 117.72 14.3823ZM115.519 7.57503L118.385 4.86235H118.641C118.846 5.06708 120.177 6.24429 120.382 6.39783C120.484 6.44902 120.637 6.5002 120.74 6.5002C120.996 6.5002 121.149 6.44902 121.354 6.34665V6.85848C121.149 7.06321 120.842 7.42149 120.842 7.93331V14.9965C119.563 15.3036 118.539 15.969 117.464 17.1974H117.362L115.468 16.7879V18.0163L116.492 18.9376L114.291 20.9337H114.137L111.732 19.04L112.346 18.3746V16.0714C112.09 16.0202 111.68 15.969 111.373 15.9178V15.5083C111.988 15.2013 112.397 14.4847 112.397 13.9217V7.93331L111.783 7.26794L111.015 8.03568L110.708 7.77977L113.574 4.86235H113.83L115.57 6.55138V7.57503H115.519Z"
          fill="#222222"
        />
        <path
          d="M123.708 19.2447C126.063 19.04 128.417 18.4258 128.417 15.9178V8.08686L127.394 7.06321L126.216 8.13805V14.0241L127.189 14.8942L124.937 16.8903H124.681L122.48 14.9965L123.094 14.3823V2.40559C123.094 1.53548 122.326 1.07484 121.815 0.921289V0.716558C122.019 0.614193 122.378 0.511827 122.838 0.511827C123.606 0.511827 124.323 0.972472 124.527 1.43312H124.579C124.988 0.767741 125.705 0.511827 126.37 0.460645C126.575 0.460645 126.831 0.460645 127.138 0.56301V0.921289C126.779 1.02365 126.216 1.53548 126.165 2.6615V7.52385L129.031 4.81117H129.287C129.492 5.0159 130.823 6.1931 131.028 6.34665C131.13 6.39783 131.283 6.44902 131.386 6.44902C131.642 6.44902 131.744 6.39783 132 6.24429V6.75611C131.795 6.96084 131.488 7.31912 131.488 7.83095V14.4335C131.488 17.4533 128.161 19.2959 123.657 19.603V19.2447H123.708Z"
          fill="#222222"
        />
      </svg>
    </a>
  </div>

  <ul
    bind:this={articlesContainer}
    class="articles-container"
    on:scroll={handleScroll}
  >
    {#each articles as { headline }}
      <li>
        {headline}
      </li>
    {/each}
  </ul>

  <ul bind:this={thumbnailsContainer} class="thumbnails-container">
    {#each thumbnails as thumbnail}
      <li>
        <div>{thumbnail}</div>
      </li>
    {/each}
  </ul>
</main>

<style>
  @font-face {
    font-family: "Austin News";
    font-weight: 500;
    src: url("./assets/fonts/austin_news_text-medium.otf") format("opentype");
  }

  :root {
    font-family: "Austin News", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  /* .divider {
    color: green;
    width: 100%;
    position: absolute;
    top: 50%;
    bottom: 50%;
    border-bottom: 1px dotted;
  }

  .divider1 {
    color: red;
    width: 100%;
    position: absolute;
    top: 40%;
    border-bottom: 1px solid;
  }
  .divider2 {
    color: red;
    width: 100%;
    position: absolute;
    bottom: 40%;
    border-bottom: 1px solid;
  } */

  main {
    position: relative;
    padding: 0 3em;
    margin: 0 auto;
    border: 8px solid black;
    border-radius: 30px;
    height: 250px;
    max-width: 800px;
    overflow: hidden;
    display: grid;
    grid-template-rows: auto 1fr;
    column-gap: 2em;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: scroll;
    /* HIDE SCROLLBAR ON FIREFOX */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  /* HIDE SCROLLBAR ON CHROME */
  ul::-webkit-scrollbar {
    display: none;
  }

  li {
    max-width: fit-content;
    font-size: 16px;
    line-height: 18px;
    color: #222222;
    opacity: 0.2;
    transform-origin: bottom left;
    transition: transform 0.2s ease-in, opacity 0.2s;
  }

  li:not(:last-child) {
    margin-bottom: 1.5em;
  }

  .articles-container {
    padding-bottom: 5em;
    overflow-x: hidden;
    mask-image: linear-gradient(to top, black 90%, transparent 100%);
    -webkit-mask-image: linear-gradient(to top, black 90%, transparent 100%);
  }

  .thumbnails-container {
    grid-row: 1/3;
    grid-column: 2;
    overflow-x: hidden;
  }

  .thumbnails-container div {
    overflow: hidden;
    width: 226px;
    height: 142px;
    background-color: aqua;
  }

  .logo-container {
    padding: 1em 0 0.5em 0;
  }
</style>
