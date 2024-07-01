import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';


const SocialLinks = () => {
    return (
        <ul className="social-links">
            <li>
              <Link href="https://x.com/royutsargo" target='_blank'><FontAwesomeIcon icon={faXTwitter} /></Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/utsargo-roy/" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></Link>
            </li>
            <li>
              <Link href="https://medium.com/@royutsargo" target='_blank'><FontAwesomeIcon icon={faMedium} /></Link>
            </li>
            <li>
              <Link href="https://github.com/utsargo" target='_blank'><FontAwesomeIcon icon={faGithub} /></Link>
            </li>
            <li className="!h-[24px]">
              <Link href="https://wellfound.com/u/utsargo-roy" target='_blank' className="!h-[24px] block"><Image
                className='wellfoundIcon' 
                src="/images/wellfoundIcon.svg"
                alt="Wellfound Icon"
                height={24}
                width={24}
              /></Link>
            </li>
          </ul>
    )
}

export default SocialLinks;