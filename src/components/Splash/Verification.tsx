import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "../../routes/url";

function Verification() {
  return (
    <>
      <div className="w-[100%]">
        <div className="mt-[32px] ml-[34px] ">
          <Link to={ROUTE_URL.HOME_URL}>
            <svg width="215" height="70" viewBox="0 0 225 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M99.032 41.4C99.032 40.04 99.304 38.856 99.848 37.848C100.392 36.824 101.144 36.032 102.104 35.472C103.08 34.912 104.192 34.632 105.44 34.632C107.056 34.632 108.384 35.024 109.424 35.808C110.48 36.592 111.176 37.68 111.512 39.072H109.16C108.936 38.272 108.496 37.64 107.84 37.176C107.2 36.712 106.4 36.48 105.44 36.48C104.192 36.48 103.184 36.912 102.416 37.776C101.648 38.624 101.264 39.832 101.264 41.4C101.264 42.984 101.648 44.208 102.416 45.072C103.184 45.936 104.192 46.368 105.44 46.368C106.4 46.368 107.2 46.144 107.84 45.696C108.48 45.248 108.92 44.608 109.16 43.776H111.512C111.16 45.12 110.456 46.2 109.4 47.016C108.344 47.816 107.024 48.216 105.44 48.216C104.192 48.216 103.08 47.936 102.104 47.376C101.144 46.816 100.392 46.024 99.848 45C99.304 43.976 99.032 42.776 99.032 41.4Z"
                fill="#000112"
                fillOpacity="0.9"
              />
              <path
                d="M126.426 40.92C126.426 41.336 126.402 41.776 126.354 42.24H115.842C115.922 43.536 116.362 44.552 117.162 45.288C117.978 46.008 118.962 46.368 120.114 46.368C121.058 46.368 121.842 46.152 122.466 45.72C123.106 45.272 123.554 44.68 123.81 43.944H126.162C125.81 45.208 125.106 46.24 124.05 47.04C122.994 47.824 121.682 48.216 120.114 48.216C118.866 48.216 117.746 47.936 116.754 47.376C115.778 46.816 115.01 46.024 114.45 45C113.89 43.96 113.61 42.76 113.61 41.4C113.61 40.04 113.882 38.848 114.426 37.824C114.97 36.8 115.73 36.016 116.706 35.472C117.698 34.912 118.834 34.632 120.114 34.632C121.362 34.632 122.466 34.904 123.426 35.448C124.386 35.992 125.122 36.744 125.634 37.704C126.162 38.648 126.426 39.72 126.426 40.92ZM124.17 40.464C124.17 39.632 123.986 38.92 123.618 38.328C123.25 37.72 122.746 37.264 122.106 36.96C121.482 36.64 120.786 36.48 120.018 36.48C118.914 36.48 117.97 36.832 117.186 37.536C116.418 38.24 115.978 39.216 115.866 40.464H124.17Z"
                fill="#000112"
                fillOpacity="0.9"
              />
              <path d="M143.133 31.272L136.821 48H134.301L127.989 31.272H130.317L135.573 45.696L140.829 31.272H143.133Z" fill="#000112" fillOpacity="0.9" />
              <path
                d="M153.904 39.384C154.512 39.48 155.064 39.728 155.56 40.128C156.072 40.528 156.472 41.024 156.76 41.616C157.064 42.208 157.216 42.84 157.216 43.512C157.216 44.36 157 45.128 156.568 45.816C156.136 46.488 155.504 47.024 154.672 47.424C153.856 47.808 152.888 48 151.768 48H145.528V31.272H151.528C152.664 31.272 153.632 31.464 154.432 31.848C155.232 32.216 155.832 32.72 156.232 33.36C156.632 34 156.832 34.72 156.832 35.52C156.832 36.512 156.56 37.336 156.016 37.992C155.488 38.632 154.784 39.096 153.904 39.384ZM147.712 38.496H151.384C152.408 38.496 153.2 38.256 153.76 37.776C154.32 37.296 154.6 36.632 154.6 35.784C154.6 34.936 154.32 34.272 153.76 33.792C153.2 33.312 152.392 33.072 151.336 33.072H147.712V38.496ZM151.576 46.2C152.664 46.2 153.512 45.944 154.12 45.432C154.728 44.92 155.032 44.208 155.032 43.296C155.032 42.368 154.712 41.64 154.072 41.112C153.432 40.568 152.576 40.296 151.504 40.296H147.712V46.2H151.576Z"
                fill="#000112"
                fillOpacity="0.9"
              />
              <path
                d="M171.91 34.848V48H169.726V46.056C169.31 46.728 168.726 47.256 167.974 47.64C167.238 48.008 166.422 48.192 165.526 48.192C164.502 48.192 163.582 47.984 162.766 47.568C161.95 47.136 161.302 46.496 160.822 45.648C160.358 44.8 160.126 43.768 160.126 42.552V34.848H162.286V42.264C162.286 43.56 162.614 44.56 163.27 45.264C163.926 45.952 164.822 46.296 165.958 46.296C167.126 46.296 168.046 45.936 168.718 45.216C169.39 44.496 169.726 43.448 169.726 42.072V34.848H171.91Z"
                fill="#000112"
                fillOpacity="0.9"
              />
              <path
                d="M176.726 32.712C176.31 32.712 175.958 32.568 175.67 32.28C175.382 31.992 175.238 31.64 175.238 31.224C175.238 30.808 175.382 30.456 175.67 30.168C175.958 29.88 176.31 29.736 176.726 29.736C177.126 29.736 177.462 29.88 177.734 30.168C178.022 30.456 178.166 30.808 178.166 31.224C178.166 31.64 178.022 31.992 177.734 32.28C177.462 32.568 177.126 32.712 176.726 32.712ZM177.782 34.848V48H175.598V34.848H177.782Z"
                fill="#000112"
                fillOpacity="0.9"
              />
              <path d="M183.688 30.24V48H181.504V30.24H183.688Z" fill="#000112" fillOpacity="0.9" />
              <path
                d="M186.594 41.376C186.594 40.032 186.867 38.856 187.411 37.848C187.955 36.824 188.699 36.032 189.643 35.472C190.603 34.912 191.674 34.632 192.859 34.632C193.883 34.632 194.834 34.872 195.714 35.352C196.594 35.816 197.266 36.432 197.73 37.2V30.24H199.939V48H197.73V45.528C197.298 46.312 196.659 46.96 195.811 47.472C194.962 47.968 193.971 48.216 192.835 48.216C191.667 48.216 190.603 47.928 189.643 47.352C188.699 46.776 187.955 45.968 187.411 44.928C186.867 43.888 186.594 42.704 186.594 41.376ZM197.73 41.4C197.73 40.408 197.53 39.544 197.13 38.808C196.73 38.072 196.187 37.512 195.499 37.128C194.827 36.728 194.082 36.528 193.266 36.528C192.451 36.528 191.706 36.72 191.035 37.104C190.363 37.488 189.826 38.048 189.426 38.784C189.027 39.52 188.827 40.384 188.827 41.376C188.827 42.384 189.027 43.264 189.426 44.016C189.826 44.752 190.363 45.32 191.035 45.72C191.706 46.104 192.451 46.296 193.266 46.296C194.082 46.296 194.827 46.104 195.499 45.72C196.187 45.32 196.73 44.752 197.13 44.016C197.53 43.264 197.73 42.392 197.73 41.4Z"
                fill="#000112"
                fillOpacity="0.9"
              />
              <path
                d="M215.629 40.92C215.629 41.336 215.605 41.776 215.557 42.24H205.045C205.125 43.536 205.565 44.552 206.365 45.288C207.181 46.008 208.165 46.368 209.317 46.368C210.261 46.368 211.045 46.152 211.669 45.72C212.309 45.272 212.757 44.68 213.013 43.944H215.365C215.013 45.208 214.309 46.24 213.253 47.04C212.197 47.824 210.885 48.216 209.317 48.216C208.069 48.216 206.949 47.936 205.957 47.376C204.981 46.816 204.213 46.024 203.653 45C203.093 43.96 202.813 42.76 202.813 41.4C202.813 40.04 203.085 38.848 203.629 37.824C204.173 36.8 204.933 36.016 205.909 35.472C206.901 34.912 208.037 34.632 209.317 34.632C210.565 34.632 211.669 34.904 212.629 35.448C213.589 35.992 214.325 36.744 214.837 37.704C215.365 38.648 215.629 39.72 215.629 40.92ZM213.373 40.464C213.373 39.632 213.189 38.92 212.821 38.328C212.453 37.72 211.949 37.264 211.309 36.96C210.685 36.64 209.989 36.48 209.221 36.48C208.117 36.48 207.173 36.832 206.389 37.536C205.621 38.24 205.181 39.216 205.069 40.464H213.373Z"
                fill="#000112"
                fillOpacity="0.9"
              />
              <path
                d="M220.696 36.984C221.08 36.232 221.624 35.648 222.328 35.232C223.048 34.816 223.92 34.608 224.944 34.608V36.864H224.368C221.92 36.864 220.696 38.192 220.696 40.848V48H218.512V34.848H220.696V36.984Z"
                fill="#000112"
                fillOpacity="0.9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.30999 0.526428C4.68417 0.753571 3.72609 1.53214 3.18068 2.25571C2.63603 2.97928 1.69692 3.57143 1.09462 3.57143C0.154749 3.57143 0 8.96071 0 41.7857V80H85L84.7906 69.5314C84.6033 60.1957 84.4371 59.0436 83.253 58.8807C82.0469 58.7143 81.9255 59.5436 81.9255 67.92V77.1429H3.03428V2.85714H81.9255V12.08C81.9255 20.4564 82.0469 21.2857 83.253 21.1193C84.4371 20.9564 84.6033 19.8043 84.7906 10.4686L85 0L45.7243 0.0564303C24.1225 0.0871446 5.93581 0.298571 5.30999 0.526428ZM39.0663 26.5443C35.1529 27.9236 32.8081 29.8943 31.0809 33.255C28.7741 37.7414 29.1814 44.3479 32.0124 48.3764C36.3226 54.5093 46.4745 56.0021 53.7143 51.5671C55.2034 50.655 55.3096 50.3457 54.4213 49.5093C53.533 48.6729 52.87 48.7407 50.014 49.9614C45.7213 51.795 43.0018 51.7936 38.9723 49.9571C35.3129 48.2893 32.6185 44.0664 32.6185 40C32.6185 35.9336 35.3129 31.7107 38.9723 30.0429C43.0018 28.2064 45.7213 28.205 50.014 30.0386C52.8207 31.2379 53.5429 31.3171 54.3902 30.5193C55.2375 29.7221 54.8992 29.2964 52.3421 27.9436C48.7889 26.0629 42.3555 25.385 39.0663 26.5443ZM61.4441 40.0586V53.6879L70.9111 53.4514C80.0754 53.2221 80.4448 53.1514 82.4618 51.25C85.506 48.3814 85.4013 44.1443 82.2206 41.4686L79.8948 39.5121L81.6691 38.0243C82.9139 36.98 83.4427 35.7614 83.4427 33.9357C83.4427 28.7086 80.2491 26.4286 72.9274 26.4286C69.0526 26.4286 68.4336 26.6071 68.6005 27.6786C68.753 28.6571 69.6845 28.9793 72.8948 29.1614C78.0644 29.455 80.4084 30.8014 80.4084 33.4771C80.4084 36.8514 77.5782 38.3443 70.8633 38.5129C69.4 38.5493 68.5239 38.9436 68.5239 39.5657C68.5239 40.2643 69.8112 40.6471 72.8568 40.855C78.6182 41.2471 81.167 42.84 81.167 46.0471C81.167 49.7736 79.1454 50.7143 71.1364 50.7143H64.4784V38.5714C64.4784 26.905 64.4193 26.4286 62.9613 26.4286C61.4972 26.4286 61.4441 26.905 61.4441 40.0586Z"
                fill="#000112"
                fillOpacity="0.9"
              />
            </svg>
          </Link>
        </div>
        <div className=" flex mt-[13%]  justify-center w-[100%]  items-center ">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="59.75" fill="#EEFFF0" stroke="#CBF4CF" strokeWidth="0.5" />
            <g clip-path="url(#clip0_48_173)">
              <path
                d="M60 100C52.0888 100 44.3552 97.6541 37.7772 93.2588C31.1992 88.8635 26.0723 82.6164 23.0448 75.3074C20.0173 67.9983 19.2252 59.9556 20.7686 52.1964C22.312 44.4372 26.1216 37.3098 31.7157 31.7157C37.3098 26.1216 44.4372 22.312 52.1964 20.7686C59.9556 19.2252 67.9983 20.0173 75.3074 23.0448C82.6164 26.0723 88.8635 31.1992 93.2588 37.7772C97.6541 44.3552 100 52.0888 100 60C100 70.6087 95.7858 80.7828 88.2843 88.2843C80.7828 95.7858 70.6087 100 60 100ZM60 26.1539C53.3059 26.1539 46.7621 28.1389 41.1961 31.858C35.6301 35.577 31.292 40.8631 28.7303 47.0477C26.1685 53.2322 25.4982 60.0376 26.8042 66.6031C28.1102 73.1686 31.3337 79.1994 36.0672 83.9329C40.8006 88.6663 46.8315 91.8899 53.397 93.1958C59.9625 94.5018 66.7678 93.8315 72.9524 91.2698C79.137 88.708 84.423 84.3699 88.1421 78.8039C91.8611 73.238 93.8462 66.6942 93.8462 60C93.8462 51.0235 90.2803 42.4146 83.9329 36.0672C77.5855 29.7198 68.9766 26.1539 60 26.1539Z"
                fill="#0E8A1A"
              />
              <path
                d="M55.3846 77.8461C54.9801 77.8424 54.5803 77.759 54.2081 77.6006C53.8359 77.4422 53.4986 77.2119 53.2154 76.923L39.0616 62.7846C38.5595 62.1942 38.2987 61.4361 38.3313 60.6617C38.364 59.8874 38.6876 59.1539 39.2376 58.6079C39.7875 58.0618 40.5233 57.7434 41.2978 57.7162C42.0723 57.6891 42.8286 57.9553 43.4154 58.4615L57.5539 72.6C57.9816 73.0302 58.2726 73.5773 58.3902 74.1725C58.5079 74.7676 58.447 75.3843 58.2152 75.9449C57.9833 76.5056 57.5909 76.9852 57.0873 77.3235C56.5837 77.6617 55.9913 77.8436 55.3846 77.8461Z"
                fill="#0E8A1A"
              />
              <path
                d="M55.3846 77.8462C54.7747 77.8467 54.1785 77.6659 53.6716 77.3269C53.1646 76.9879 52.7699 76.5059 52.5375 75.9421C52.305 75.3783 52.2453 74.7581 52.366 74.1603C52.4867 73.5625 52.7823 73.0141 53.2153 72.5847L76.5846 49.2308C77.1619 48.6535 77.945 48.3291 78.7615 48.3291C79.578 48.3291 80.361 48.6535 80.9384 49.2308C81.5158 49.8082 81.8401 50.5912 81.8401 51.4077C81.8401 52.2242 81.5158 53.0073 80.9384 53.5847L57.5538 76.9231C57.2706 77.212 56.9333 77.4423 56.5611 77.6007C56.1889 77.759 55.7891 77.8425 55.3846 77.8462Z"
                fill="#0E8A1A"
              />
            </g>
            <defs>
              <clipPath id="clip0_48_173">
                <rect width="80" height="80" fill="white" transform="translate(20 20)" />
              </clipPath>
            </defs>
          </svg>
        </div>{" "}
        <div className=" mt-[40px] ml-[35%] w-[30%] text-center">
          <p className=" text-[#666666]  text-opacity-80 text-[14px] font-normal ">We emailed a link to you. Please click on the link for account verification</p>
        </div>
      </div>
    </>
  );
}

export default Verification;
