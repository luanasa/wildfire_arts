import React, { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "@fontsource/roboto-mono"; 

function Header() {

  const [isActive, setIsActive] = useState(false);

  const handleMenuToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
       <ul className={`pages ${isActive ? 'active' : ''}`}>
        <li><a href="./">Início</a></li>
        <li><a href="./">Sobre</a></li>
        <li><a href="./">Contato</a></li>
      </ul>
      <FontAwesomeIcon icon={faBars} className='menu-open' onClick={handleMenuToggle} />
      <img src="./logo.png" alt="" srcSet="" />
      <ul className="social-links">
        <li>
          <a href="https://www.instagram.com/awildfire/" target="_blank" rel="noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.9999 7.00005C15.9999 6.44776 16.4477 6.00005 16.9999 6.00005C17.5522 6.00005 17.9999 6.44776 17.9999 7.00005C17.9999 7.55233 17.5522 8.00005 16.9999 8.00005C16.4477 8.00005 15.9999 7.55233 15.9999 7.00005Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 7.25005C9.37659 7.25005 7.24994 9.37669 7.24994 12C7.24994 14.6234 9.37659 16.75 11.9999 16.75C14.6233 16.75 16.7499 14.6234 16.7499 12C16.7499 9.37669 14.6233 7.25005 11.9999 7.25005ZM8.74994 12C8.74994 10.2051 10.205 8.75005 11.9999 8.75005C13.7949 8.75005 15.2499 10.2051 15.2499 12C15.2499 13.795 13.7949 15.25 11.9999 15.25C10.205 15.25 8.74994 13.795 8.74994 12Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2582 2.83306C13.7916 2.44562 10.2083 2.44562 6.74171 2.83306C4.72965 3.05794 3.10532 4.64295 2.86876 6.66548C2.45423 10.2098 2.45423 13.7903 2.86876 17.3346C3.10532 19.3571 4.72965 20.9422 6.74171 21.167C10.2083 21.5545 13.7916 21.5545 17.2582 21.167C19.2702 20.9422 20.8946 19.3571 21.1311 17.3346C21.5457 13.7903 21.5457 10.2098 21.1311 6.66548C20.8946 4.64295 19.2703 3.05794 17.2582 2.83306ZM6.90832 4.32378C10.2642 3.94871 13.7357 3.94871 17.0916 4.32378C18.4217 4.47244 19.4872 5.52205 19.6413 6.83973C20.0423 10.2683 20.0423 13.7318 19.6413 17.1604C19.4872 18.478 18.4217 19.5277 17.0916 19.6763C13.7357 20.0514 10.2642 20.0514 6.90832 19.6763C5.57821 19.5277 4.51272 18.478 4.35861 17.1604C3.95761 13.7318 3.95761 10.2683 4.35861 6.83973C4.51272 5.52205 5.57821 4.47244 6.90832 4.32378Z" fill="black"/>
          </svg>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCkUis29RZPARopApecbuVqw" target="_blank" rel="noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3859 8.35691C10.1542 8.21789 9.86561 8.21425 9.63048 8.34738C9.39534 8.48051 9.25 8.72983 9.25 9.00003V15C9.25 15.2702 9.39534 15.5196 9.63048 15.6527C9.86561 15.7858 10.1542 15.7822 10.3859 15.6432L15.3859 12.6432C15.6118 12.5076 15.75 12.2635 15.75 12C15.75 11.7366 15.6118 11.4925 15.3859 11.3569L10.3859 8.35691ZM13.5423 12L10.75 13.6754V10.3247L13.5423 12Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0307 4.64131C13.682 4.37933 10.318 4.37933 6.96938 4.64131L4.72868 4.81661C3.36612 4.92321 2.25143 5.94442 2.02619 7.29246C1.50543 10.4092 1.50543 13.5908 2.02619 16.7076C2.25143 18.0556 3.36612 19.0768 4.72868 19.1834L6.96938 19.3587C10.318 19.6207 13.682 19.6207 17.0307 19.3587L19.2714 19.1834C20.6339 19.0768 21.7486 18.0556 21.9739 16.7076C22.4946 13.5908 22.4946 10.4092 21.9739 7.29246C21.7486 5.94442 20.6339 4.92321 19.2714 4.81661L17.0307 4.64131ZM7.08638 6.13674C10.3572 5.88085 13.6429 5.88085 16.9137 6.13674L19.1544 6.31204C19.83 6.3649 20.3827 6.87125 20.4944 7.53966C20.9878 10.4928 20.9878 13.5073 20.4944 16.4604C20.3827 17.1288 19.83 17.6352 19.1544 17.688L16.9137 17.8633C13.6429 18.1192 10.3571 18.1192 7.08638 17.8633L4.84568 17.688C4.17007 17.6352 3.61736 17.1288 3.50568 16.4604C3.01227 13.5073 3.01227 10.4928 3.50568 7.53966C3.61736 6.87125 4.17007 6.3649 4.84568 6.31204L7.08638 6.13674Z" fill="black"/>
          </svg>
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@awildfire" target="_blank" rel="noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5067 1.50804C10.6884 1.29895 10.9706 1.20705 11.2406 1.26904C14.8494 2.09755 16.6735 6.05217 16.2445 9.5903C16.0778 10.9657 15.6658 12.0439 15.0592 12.9018C15.0555 12.9071 15.0517 12.9123 15.048 12.9175C15.1858 12.8498 15.3129 12.7767 15.4319 12.6995C16.0238 12.3153 16.4583 11.8083 17.0239 11.1481C17.0923 11.0683 17.1626 10.9863 17.2353 10.902C17.3987 10.7125 17.6459 10.6169 17.8942 10.6473C18.1426 10.6776 18.3595 10.8299 18.4725 11.0531C18.97 12.0363 19.25 13.1479 19.25 14.3226C19.25 18.3267 16.0041 21.5726 12 21.5726C7.99594 21.5726 4.75 18.3267 4.75 14.3226C4.75 11.7856 6.05371 9.5535 8.02431 8.25906L8.09187 8.19098C8.12658 8.15601 8.16464 8.12454 8.20552 8.09703C9.07138 7.5144 9.69312 7.03786 10.1117 6.47743C10.5071 5.94801 10.75 5.3022 10.75 4.32264C10.75 3.59736 10.6161 2.90512 10.3723 2.26809C10.2733 2.00936 10.3249 1.71713 10.5067 1.50804ZM12.1712 3.25081C12.2231 3.60079 12.25 3.95872 12.25 4.32264C12.25 5.59106 11.9223 6.55995 11.3135 7.37505C10.7417 8.14054 9.95028 8.72847 9.10466 9.2999L9.03236 9.37275C8.99362 9.41179 8.95071 9.44644 8.90439 9.4761C7.30648 10.4991 6.25 12.2877 6.25 14.3226C6.25 17.4983 8.82436 20.0726 12 20.0726C15.1756 20.0726 17.75 17.4983 17.75 14.3226C17.75 13.8028 17.6812 13.2997 17.5523 12.8217C17.1721 13.2334 16.7524 13.6307 16.2485 13.9577C15.3253 14.5569 14.1699 14.899 12.5 14.899C12.1577 14.899 11.8589 14.6673 11.7736 14.3358C11.6884 14.0044 11.8383 13.6572 12.1381 13.4921C12.8169 13.1181 13.3923 12.661 13.8345 12.0357C14.2757 11.4118 14.6137 10.5787 14.7555 9.40975C15.0623 6.879 14.0149 4.38107 12.1712 3.25081Z" fill="black"/>
          </svg>
          </a>
        </li>
      </ul> 
    </nav>
  );
}

export default Header;
