const Logo = ({ color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="164"
      height="65"
      viewBox="0 0 164 65"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M78.8062 25.5029C79.8088 26.4428 80.3101 27.696 80.3101 29.2416C80.3101 30.2442 80.1012 31.1424 79.7044 31.9569C79.3075 32.7715 78.7227 33.4608 77.9499 34.0456C77.1979 34.6305 76.2789 35.0691 75.2137 35.3824C74.1485 35.6957 72.9579 35.8419 71.6211 35.8419C70.7021 35.8419 69.7831 35.7792 68.885 35.633C67.9659 35.5077 67.1096 35.2988 66.295 35.0064C65.4804 34.7349 64.7494 34.3798 64.1019 33.9621C63.7259 33.7114 63.4753 33.419 63.329 33.0639C63.1828 32.7089 63.1411 32.3538 63.1828 32.0196C63.2246 31.6854 63.3708 31.3721 63.5797 31.1215C63.7886 30.8708 64.081 30.7037 64.4152 30.6411C64.7494 30.5784 65.1044 30.662 65.5013 30.9126C66.4203 31.4557 67.3811 31.8525 68.4046 32.1031C69.428 32.3538 70.4932 32.4791 71.6211 32.4791C73.2712 32.4791 74.4618 32.2076 75.2137 31.6436C75.9656 31.1006 76.3416 30.3695 76.3416 29.5132C76.3416 28.7821 76.07 28.2182 75.5479 27.8004C75.0257 27.3827 74.1067 27.0485 72.8117 26.777L69.3862 26.0668C67.402 25.6491 65.9399 24.9389 64.9791 23.9573C64.0183 22.9756 63.5379 21.6597 63.5379 20.0514C63.5379 19.028 63.7468 18.1089 64.1645 17.2735C64.5823 16.438 65.1671 15.7278 65.919 15.1221C66.6709 14.5164 67.59 14.0569 68.6343 13.7436C69.6786 13.4303 70.8483 13.2632 72.1224 13.2632C73.3756 13.2632 74.5662 13.4094 75.6732 13.7227C76.8011 14.036 77.8036 14.4955 78.7018 15.1012C79.036 15.331 79.2657 15.6025 79.3702 15.9367C79.4746 16.2709 79.5164 16.6051 79.4537 16.9184C79.3911 17.2317 79.2449 17.5241 79.0151 17.7539C78.7853 17.9836 78.4929 18.1089 78.1587 18.1507C77.8245 18.1925 77.4277 18.088 76.9891 17.8374C76.2162 17.3988 75.4434 17.0855 74.6497 16.8975C73.856 16.7095 72.9997 16.626 72.0807 16.626C71.1199 16.626 70.3053 16.7513 69.616 17.0228C68.9267 17.2943 68.4046 17.6703 68.0495 18.1716C67.6944 18.652 67.5064 19.2368 67.5064 19.9052C67.5064 20.6571 67.7571 21.2629 68.2583 21.7015C68.7596 22.1401 69.616 22.4952 70.8274 22.7458L74.232 23.456C76.2998 23.8946 77.8245 24.5839 78.8271 25.5238L78.8062 25.5029ZM98.5235 15.9785C98.8576 15.6443 99.3589 15.4772 99.9646 15.4772C100.591 15.4772 101.072 15.6443 101.406 15.9785C101.74 16.3127 101.907 16.7931 101.907 17.4406V20.2812H105.207C105.709 20.2812 106.085 20.4065 106.356 20.6571C106.628 20.9078 106.753 21.2629 106.753 21.7433C106.753 22.2028 106.628 22.5578 106.356 22.8294C106.085 23.08 105.709 23.2262 105.207 23.2262H101.907V29.6594C101.907 30.662 102.116 31.4139 102.555 31.9152C102.993 32.4165 103.703 32.6671 104.685 32.6671C105.04 32.6671 105.353 32.6462 105.625 32.5835C105.897 32.5209 106.126 32.4791 106.335 32.4582C106.586 32.4373 106.795 32.5209 106.962 32.688C107.129 32.8551 107.212 33.231 107.212 33.7741C107.212 34.1918 107.15 34.5678 107.004 34.8811C106.878 35.1944 106.628 35.4242 106.272 35.5495C106.001 35.633 105.646 35.7166 105.207 35.7792C104.769 35.8419 104.393 35.8837 104.058 35.8837C102.701 35.8837 101.573 35.6539 100.675 35.1944C99.7767 34.7349 99.1083 34.0665 98.6697 33.1893C98.231 32.312 98.0222 31.205 98.0222 29.8891V23.2471H96.393C95.8917 23.2471 95.5157 23.1218 95.2442 22.8503C94.9727 22.5996 94.8474 22.2236 94.8474 21.7641C94.8474 21.2837 94.9727 20.9287 95.2442 20.678C95.5157 20.4274 95.8917 20.3021 96.393 20.3021H98.0222V17.4614C98.0222 16.8139 98.1893 16.3335 98.5443 15.9994L98.5235 15.9785ZM84.9679 25.6282H91.6099C92.0485 25.6282 92.4245 25.7744 92.7169 26.0668C93.0093 26.3593 93.1764 26.7352 93.1764 27.1947C93.1764 27.6334 93.0302 28.0093 92.7169 28.3017C92.4245 28.5942 92.0485 28.7612 91.6099 28.7612H84.9679C84.5083 28.7612 84.1324 28.615 83.8191 28.3017C83.5267 28.0093 83.3596 27.6334 83.3596 27.1947C83.3596 26.7352 83.5058 26.3593 83.8191 26.0668C84.1115 25.7744 84.5083 25.6282 84.9679 25.6282ZM129.123 20.5318C129.457 20.866 129.624 21.3464 129.624 21.9939V22.9756C129.937 22.2028 130.418 21.5762 131.023 21.1166C131.88 20.4692 133.008 20.0932 134.428 19.9679C134.867 19.9261 135.222 20.0305 135.472 20.3021C135.723 20.5527 135.89 20.9704 135.932 21.5135C135.974 22.0357 135.848 22.4534 135.577 22.7876C135.305 23.1009 134.867 23.3098 134.303 23.3724L133.613 23.4351C132.339 23.5604 131.379 23.9573 130.752 24.6048C130.104 25.2522 129.791 26.1713 129.791 27.3618V33.8159C129.791 34.4634 129.624 34.9646 129.29 35.2988C128.956 35.633 128.475 35.821 127.828 35.821C127.18 35.821 126.679 35.6539 126.345 35.2988C126.011 34.9646 125.823 34.4634 125.823 33.8159V22.0148C125.823 21.3673 125.99 20.8869 126.324 20.5527C126.658 20.2185 127.118 20.0514 127.723 20.0514C128.329 20.0514 128.789 20.2185 129.123 20.5527V20.5318ZM122.251 24.4377C122.564 25.3776 122.731 26.4428 122.731 27.6334C122.731 28.0093 122.606 28.3017 122.335 28.4897C122.084 28.6777 121.708 28.7821 121.227 28.7821H111.787C111.912 29.9936 112.309 30.9335 112.935 31.6019C113.729 32.4373 114.92 32.876 116.486 32.876C117.029 32.876 117.635 32.8133 118.303 32.6671C118.972 32.5418 119.619 32.2911 120.225 31.9569C120.664 31.7063 121.04 31.6019 121.374 31.6227C121.708 31.6436 121.979 31.769 122.167 31.9778C122.355 32.1867 122.481 32.4373 122.522 32.7506C122.564 33.0431 122.502 33.3564 122.355 33.6697C122.209 33.983 121.938 34.2545 121.562 34.4843C120.831 34.9438 119.995 35.278 119.055 35.5077C118.115 35.7166 117.238 35.8419 116.424 35.8419C114.69 35.8419 113.207 35.5286 111.954 34.8811C110.701 34.2336 109.74 33.3146 109.071 32.1449C108.403 30.9544 108.048 29.5549 108.048 27.9258C108.048 26.3384 108.382 24.9598 109.03 23.7693C109.677 22.5787 110.596 21.6597 111.745 20.9704C112.894 20.3021 114.21 19.947 115.692 19.947C116.779 19.947 117.739 20.1141 118.617 20.4692C119.473 20.8242 120.225 21.3255 120.831 21.9939C121.436 22.6623 121.917 23.456 122.23 24.4168L122.251 24.4377ZM151.472 21.054C152.433 20.6571 153.352 20.3856 154.229 20.2185C155.106 20.0514 155.921 19.9679 156.652 19.9679C158.156 19.9679 159.388 20.1976 160.349 20.6571C161.309 21.1166 162.04 21.8059 162.521 22.7249C163.001 23.644 163.231 24.8345 163.231 26.2966V33.795C163.231 34.4425 163.085 34.9438 162.772 35.278C162.458 35.6121 162.02 35.8001 161.435 35.8001C160.85 35.8001 160.39 35.633 160.077 35.278C159.764 34.9438 159.597 34.4425 159.597 33.795V33.1475C159.451 33.5235 159.242 33.8785 158.991 34.1918C158.573 34.714 158.03 35.1317 157.383 35.4242C156.735 35.7166 156.004 35.8628 155.169 35.8628C154.062 35.8628 153.08 35.6539 152.224 35.2153C151.367 34.7976 150.678 34.2127 150.198 33.4817C149.717 32.7506 149.467 31.9361 149.467 31.017C149.467 29.8891 149.759 29.0119 150.344 28.3435C150.929 27.696 151.869 27.2156 153.184 26.9232C154.5 26.6308 156.255 26.4846 158.469 26.4846H159.555V25.8371C159.555 24.7927 159.325 24.0408 158.866 23.5813C158.406 23.1218 157.633 22.892 156.547 22.892C155.942 22.892 155.294 22.9547 154.605 23.1009C153.915 23.2471 153.184 23.4977 152.412 23.8528C152.015 24.0408 151.66 24.0826 151.367 23.999C151.075 23.9155 150.824 23.7484 150.657 23.4769C150.49 23.2262 150.406 22.9338 150.406 22.6205C150.406 22.3072 150.49 21.9939 150.657 21.7015C150.824 21.4091 151.096 21.1793 151.493 21.0331L151.472 21.054ZM142.01 27.3201V33.7741C142.01 34.4216 141.843 34.9229 141.509 35.2571C141.174 35.5913 140.694 35.7792 140.047 35.7792C139.399 35.7792 138.898 35.6121 138.564 35.2571C138.229 34.9229 138.041 34.4216 138.041 33.7741V21.973C138.041 21.3255 138.209 20.8451 138.543 20.5109C138.877 20.1767 139.336 20.0096 139.942 20.0096C140.548 20.0096 141.007 20.1767 141.342 20.5109C141.676 20.8451 141.843 21.3255 141.843 21.973V22.9547C142.156 22.1819 142.637 21.5553 143.242 21.0958C144.099 20.4483 145.227 20.0723 146.647 19.947C147.085 19.9052 147.441 20.0096 147.691 20.2812C147.942 20.5318 148.109 20.9496 148.151 21.4926C148.192 22.0148 148.067 22.4325 147.796 22.7667C147.524 23.08 147.085 23.2889 146.522 23.3515L145.832 23.4142C144.558 23.5395 143.597 23.9364 142.971 24.5839C142.323 25.2314 142.01 26.1504 142.01 27.3409V27.3201ZM84.6546 49.669C85.3438 48.9798 86.1584 48.4367 87.1192 48.0816C88.08 47.7265 89.1452 47.5386 90.3358 47.5386C91.9232 47.5386 93.2808 47.8519 94.4505 48.4994C95.6202 49.1469 96.5183 50.0659 97.1658 51.2355C97.8133 52.4261 98.1266 53.8255 98.1266 55.4547C98.1266 56.687 97.9386 57.794 97.5835 58.7548C97.2285 59.7365 96.6854 60.572 96.017 61.2612C95.3278 61.9505 94.5132 62.4936 93.5524 62.8486C92.5916 63.2037 91.5263 63.3917 90.3358 63.3917C88.7484 63.3917 87.3907 63.0784 86.2211 62.4309C85.0514 61.7834 84.1533 60.8644 83.5058 59.6738C82.8583 58.4833 82.545 57.063 82.545 55.4547C82.545 54.2224 82.733 53.1362 83.088 52.1546C83.4431 51.1938 83.9862 50.3583 84.6546 49.6481V49.669ZM78.8062 53.0527C79.8088 53.9926 80.3101 55.2458 80.3101 56.7915C80.3101 57.794 80.1012 58.6922 79.7044 59.5067C79.3075 60.3213 78.7227 61.0106 77.9499 61.5954C77.1979 62.1803 76.2789 62.6189 75.2137 62.9322C74.1485 63.2455 72.9579 63.3917 71.6211 63.3917C70.7021 63.3917 69.7831 63.329 68.885 63.1828C67.9659 63.0575 67.1096 62.8486 66.295 62.5562C65.4804 62.2847 64.7494 61.9296 64.1019 61.5119C63.7259 61.2612 63.4753 60.9688 63.329 60.6138C63.1828 60.2587 63.1411 59.9036 63.1828 59.5694C63.2246 59.2352 63.3708 58.9219 63.5797 58.6713C63.7886 58.4206 64.081 58.2535 64.4152 58.1909C64.7494 58.1282 65.1044 58.2118 65.5013 58.4624C66.4203 59.0055 67.3811 59.4023 68.4046 59.653C69.428 59.9036 70.4932 60.0289 71.6211 60.0289C73.2712 60.0289 74.4618 59.7574 75.2137 59.1934C75.9656 58.6504 76.3416 57.9193 76.3416 57.063C76.3416 56.3319 76.07 55.768 75.5479 55.3503C75.0257 54.9325 74.1067 54.5983 72.8117 54.3268L69.3862 53.6166C67.402 53.1989 65.9399 52.4888 64.9791 51.5071C64.0183 50.5254 63.5379 49.2095 63.5379 47.6012C63.5379 46.5778 63.7468 45.6587 64.1645 44.8233C64.5823 43.9878 65.1671 43.2776 65.919 42.6719C66.6709 42.0662 67.59 41.6067 68.6343 41.2934C69.6786 40.9801 70.8483 40.813 72.1224 40.813C73.3756 40.813 74.5662 40.9592 75.6732 41.2725C76.8011 41.5858 77.8036 42.0453 78.7018 42.651C79.036 42.8808 79.2657 43.1523 79.3702 43.4865C79.4746 43.8207 79.5164 44.1549 79.4537 44.4682C79.3911 44.7815 79.2449 45.0739 79.0151 45.3037C78.7853 45.5334 78.4929 45.6587 78.1587 45.7005C77.8245 45.7423 77.4277 45.6379 76.9891 45.3872C76.2162 44.9486 75.4434 44.6353 74.6497 44.4473C73.856 44.2593 72.9997 44.1758 72.0807 44.1758C71.1199 44.1758 70.3053 44.3011 69.616 44.5726C68.9267 44.8442 68.4046 45.2201 68.0495 45.7214C67.6944 46.2018 67.5064 46.7866 67.5064 47.455C67.5064 48.2069 67.7571 48.8127 68.2583 49.2513C68.7596 49.6899 69.616 50.045 70.8274 50.2956L74.232 51.0058C76.2998 51.4444 77.8245 52.1337 78.8271 53.0736L78.8062 53.0527ZM115.484 47.831H118.784C119.285 47.831 119.661 47.9563 119.933 48.2069C120.204 48.4576 120.329 48.8127 120.329 49.2931C120.329 49.7526 120.204 50.1076 119.933 50.3792C119.661 50.6298 119.285 50.776 118.784 50.776H115.484V57.2092C115.484 58.2118 115.692 58.9637 116.131 59.465C116.57 59.9663 117.28 60.2169 118.262 60.2169C118.617 60.2169 118.93 60.196 119.201 60.1334C119.473 60.0707 119.703 60.0289 119.912 60.008C120.162 59.9871 120.371 60.0707 120.538 60.2378C120.705 60.4049 120.789 60.7808 120.789 61.3239C120.789 61.7416 120.726 62.1176 120.58 62.4309C120.455 62.7442 120.204 62.974 119.849 63.0993C119.577 63.1828 119.222 63.2664 118.784 63.329C118.345 63.3917 117.969 63.4335 117.635 63.4335C116.277 63.4335 115.149 63.2037 114.251 62.7442C113.353 62.2847 112.685 61.6163 112.246 60.7391C111.808 59.8618 111.599 58.7548 111.599 57.4389V50.7969H109.969C109.761 50.7969 109.552 50.776 109.385 50.7134C109.218 50.7551 109.009 50.7969 108.8 50.7969H106.147V61.3866C106.147 62.7233 105.5 63.3917 104.205 63.3917C103.578 63.3917 103.098 63.2246 102.763 62.8695C102.429 62.5353 102.241 62.0341 102.241 61.3866V50.7969H100.8C100.299 50.7969 99.9229 50.6716 99.6513 50.4001C99.3798 50.1494 99.2545 49.7735 99.2545 49.3139C99.2545 48.8335 99.3798 48.4785 99.6513 48.2278C99.9229 47.9772 100.299 47.8519 100.8 47.8519H102.241V47.831C102.241 45.6796 102.784 44.0713 103.87 43.0061C104.957 41.9409 106.523 41.3143 108.549 41.1263L109.614 41.0427C110.032 41.001 110.366 41.0636 110.617 41.2516C110.868 41.4187 111.035 41.6485 111.118 41.9409C111.202 42.2124 111.202 42.5048 111.16 42.7972C111.097 43.0896 110.972 43.3403 110.763 43.57C110.575 43.7789 110.304 43.9042 109.99 43.9251L109.552 43.946C108.361 44.0296 107.505 44.322 106.962 44.8442C106.419 45.3663 106.147 46.16 106.147 47.2253V47.8727H108.8C109.009 47.8727 109.218 47.8936 109.385 47.9354C109.552 47.8936 109.761 47.8727 109.969 47.8727H111.599V45.0321C111.599 44.3846 111.766 43.9042 112.121 43.57C112.455 43.2359 112.956 43.0688 113.562 43.0688C114.189 43.0688 114.669 43.2359 115.003 43.57C115.337 43.9042 115.504 44.3846 115.504 45.0321V47.8727L115.484 47.831ZM29.6803 4.88753C29.6803 5.74389 28.991 6.45405 28.1138 6.45405C27.2574 6.45405 26.5472 5.76478 26.5472 4.88753V1.56652C26.5472 0.710154 27.2365 0 28.1138 0C28.9701 0 29.6803 0.689267 29.6803 1.56652V4.88753ZM49.126 9.31555L45.8049 12.6366C45.1992 13.2423 44.2175 13.2423 43.5909 12.6366C42.9852 12.0308 42.9852 11.0492 43.5909 10.4226L46.912 7.10154C47.5177 6.49582 48.4994 6.49582 49.126 7.10154C49.7317 7.70726 49.7317 8.68895 49.126 9.31555ZM39.7686 16.438C42.7555 19.4248 44.5935 23.5395 44.5935 28.0929C44.5935 31.2677 43.6954 34.2336 42.1289 36.7609C40.6877 39.1003 38.6825 41.0427 36.3014 42.4004V44.6771C36.3014 46.9328 35.3824 48.9798 33.8994 50.4627C32.4165 51.9457 30.3695 52.8647 28.1138 52.8647C25.858 52.8647 23.8111 51.9457 22.3281 50.4627C20.8451 48.9798 19.9261 46.9328 19.9261 44.6771V42.4004C17.545 41.0427 15.5398 39.1003 14.0986 36.7609C12.5321 34.2336 11.634 31.2677 11.634 28.0929C11.634 23.5395 13.472 19.4248 16.4589 16.438C19.4457 13.4512 23.5604 11.6131 28.1138 11.6131C32.6671 11.6131 36.7818 13.4512 39.7686 16.438ZM43.5909 40.2699C44.1967 39.6642 45.1783 39.6642 45.8049 40.2699L49.126 43.5909C49.7317 44.1967 49.7317 45.1783 49.126 45.8049C48.5202 46.4107 47.5386 46.4107 46.912 45.8049L43.5909 42.4839C42.9852 41.8782 42.9852 40.8965 43.5909 40.2699ZM54.6401 23.2262C55.4965 23.2262 56.2066 23.9155 56.2066 24.7927C56.2066 25.6491 55.5173 26.3593 54.6401 26.3593H51.3191C50.4627 26.3593 49.7526 25.67 49.7526 24.7927C49.7526 23.9364 50.4418 23.2262 51.3191 23.2262H54.6401ZM12.6157 10.4226C13.2214 11.0283 13.2214 12.01 12.6157 12.6366C12.01 13.2423 11.0283 13.2423 10.4017 12.6366L7.08066 9.31555C6.47494 8.70983 6.47494 7.72815 7.08066 7.10154C7.68638 6.49582 8.66806 6.49582 9.29467 7.10154L12.6157 10.4226ZM21.4717 56.4155H34.7349C35.5913 56.4155 36.3014 57.1048 36.3014 57.982C36.3014 58.8384 35.6121 59.5485 34.7349 59.5485H21.4717C20.6154 59.5485 19.9052 58.8593 19.9052 57.982C19.9052 57.1256 20.5945 56.4155 21.4717 56.4155ZM10.4226 40.2908C11.0283 39.6851 12.01 39.6851 12.6366 40.2908C13.2423 40.8965 13.2423 41.8782 12.6366 42.5048L9.31555 45.8258C8.70983 46.4316 7.72815 46.4316 7.10154 45.8258C6.49582 45.2201 6.49582 44.2384 7.10154 43.6118L10.4226 40.2908ZM4.88753 23.2471C5.74389 23.2471 6.45405 23.9364 6.45405 24.8136C6.45405 25.67 5.76478 26.3801 4.88753 26.3801H1.56652C0.710154 26.3801 0 25.6909 0 24.8136C0 23.9573 0.689267 23.2471 1.56652 23.2471H4.88753ZM23.1636 61.867H33.0431C33.8994 61.867 34.6096 62.5562 34.6096 63.4335C34.6096 64.2898 33.9203 65 33.0431 65H23.1636C22.3072 65 21.597 64.3107 21.597 63.4335C21.597 62.5771 22.2863 61.867 23.1636 61.867ZM33.1893 44.7188V41.6276C33.1475 41.001 33.4608 40.3952 34.0456 40.1028C36.2805 38.9958 38.1603 37.2622 39.4762 35.1526C40.7294 33.1057 41.4605 30.7037 41.4605 28.1138C41.4605 24.4168 39.9566 21.0749 37.5546 18.652C35.1317 16.2291 31.7898 14.7461 28.0929 14.7461C24.3959 14.7461 21.054 16.25 18.6311 18.652C16.2082 21.0749 14.7253 24.4168 14.7253 28.1138C14.7253 30.7037 15.4563 33.1057 16.7095 35.1526C17.357 36.197 18.1507 37.1578 19.0697 37.9933C19.4248 38.2021 19.7799 38.3901 20.135 38.5572C21.0122 38.9749 21.9312 39.2674 22.8711 39.4553C23.8111 39.6433 24.751 39.7477 25.6909 39.7477C27.7587 39.7477 29.3879 39.3718 30.5575 38.599C31.7272 37.8262 32.2911 36.7818 32.2911 35.4659C32.2911 34.4007 31.9361 33.5443 31.205 32.9177C30.474 32.2911 29.3043 31.8107 27.6751 31.4557L23.4351 30.5157C21.3882 30.0771 19.8843 29.367 18.8817 28.3853C17.9001 27.4036 17.3988 26.1086 17.3988 24.4794C17.3988 23.1844 17.7539 22.0566 18.464 21.0749C19.1742 20.0932 20.1558 19.3413 21.4299 18.8191C22.704 18.276 24.187 18.0254 25.8789 18.0254C26.9232 18.0254 27.9467 18.1507 28.991 18.3805C30.0353 18.6102 30.9961 18.9653 31.8943 19.4248C32.5209 19.7381 33.0431 20.1141 33.5026 20.5109C33.8368 20.8242 33.9203 21.3255 33.6906 21.7224L33.6697 21.785C33.5235 22.0357 33.2937 22.2028 33.0222 22.2445C32.7298 22.3072 32.4791 22.2445 32.2494 22.0566C31.8525 21.7433 31.4139 21.4717 30.9544 21.2211C30.1607 20.8033 29.3252 20.49 28.4688 20.3021C27.6125 20.1141 26.7561 20.0096 25.8789 20.0096C23.9573 20.0096 22.4534 20.4065 21.3255 21.2211C20.2185 22.0148 19.6546 23.1009 19.6546 24.4585C19.6546 25.5238 19.9888 26.3801 20.6362 27.0276C21.3046 27.6751 22.3907 28.1764 23.8946 28.5106L28.0929 29.4505C30.2651 29.9309 31.8734 30.6202 32.9177 31.581C33.9621 32.5209 34.5051 33.795 34.5051 35.4033C34.5051 36.6983 34.1292 37.8053 33.3981 38.7661C32.6671 39.7269 31.6227 40.4579 30.286 40.9801C28.9492 41.5023 27.3827 41.7529 25.5864 41.7529C24.7301 41.7529 23.8946 41.6902 23.0382 41.544V44.7397C23.0382 46.1391 23.6022 47.4132 24.5212 48.3323C25.4402 49.2513 26.7143 49.8152 28.1138 49.8152C29.5132 49.8152 30.7873 49.2513 31.7063 48.3323C32.6253 47.4132 33.1893 46.1391 33.1893 44.7397V44.7188ZM86.9521 52.7185C86.6388 53.4495 86.4717 54.3686 86.4717 55.4756C86.4717 57.1256 86.8268 58.358 87.5369 59.2143C88.2471 60.0498 89.187 60.4884 90.3358 60.4884C91.1086 60.4884 91.777 60.3004 92.3618 59.9245C92.9466 59.5485 93.4062 58.9846 93.7195 58.2535C94.0328 57.5225 94.1999 56.6035 94.1999 55.4965C94.1999 53.8255 93.8448 52.5932 93.1346 51.7577C92.4245 50.9431 91.4846 50.5254 90.3358 50.5254C89.563 50.5254 88.8946 50.7134 88.3098 51.0684C87.7249 51.4235 87.2654 51.9875 86.9521 52.7185ZM111.808 26.5472H119.473C119.431 25.7953 119.306 25.1478 119.055 24.6048C118.784 23.9573 118.366 23.456 117.844 23.1218C117.322 22.7876 116.653 22.5996 115.86 22.5996C114.982 22.5996 114.251 22.8085 113.625 23.2053C113.019 23.6022 112.539 24.187 112.225 24.9181C112.016 25.3985 111.87 25.9206 111.808 26.5264V26.5472ZM153.727 29.5549C153.414 29.8474 153.247 30.286 153.247 30.829C153.247 31.5183 153.477 32.0823 153.957 32.5209C154.438 32.9595 155.106 33.1684 155.962 33.1684C156.652 33.1684 157.257 33.0013 157.78 32.688C158.302 32.3747 158.74 31.9152 159.054 31.3512C159.367 30.7873 159.513 30.1398 159.513 29.4087V28.7195H158.448C157.153 28.7195 156.13 28.7821 155.357 28.9075C154.584 29.0328 154.041 29.2416 153.727 29.5549Z"
        fill={color}
      />
    </svg>
  );
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = "state test";
  }
  render() {
    console.debug(this.state);
    return (
      <header>
        <div className="container" style={{ paddingBlock: "20px" }}>
          <div id="logo-header">
            <Logo />
          </div>
          <ul id="header-links">
            <li>
              <a href="#about">О Нас</a>
            </li>
            <li>
              <a href="#services">Услуги</a>
            </li>
            <li>
              <a href="#school">Школа</a>
            </li>
            <li>
              <a href="#portfolio">Портфолио</a>
            </li>
            <li>
              <a href="#contacts">
                <button
                  className="yellow-btn"
                  style={{
                    paddingBlock: "15px",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  Наши контакты
                </button>
              </a>
            </li>
            <li style={{ flexGrow: 1 }}>
              <button
                style={{
                  textAlign: "end",
                  width: "100%",
                  background: "none",
                  border: "none",
                }}
              >
                EN
              </button>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("header"));
