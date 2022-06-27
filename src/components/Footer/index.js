import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa'
import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterLinkSocial,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink
} from './FooterElement'


const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop()
	}

	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/signin">Testimonials</FooterLink>
							<FooterLink to="/signin">Careers</FooterLink>
							<FooterLink to="/signin">Investor</FooterLink>
							<FooterLink to="/signin">Terms of Service</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Contact Us</FooterLinkTitle>
							<FooterLink to="/signin">Contact</FooterLink>
							<FooterLink to="/signin">Support</FooterLink>
							<FooterLink to="/signin">Destinations</FooterLink>
							<FooterLink to="/signin">Sponsorships</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Videos</FooterLinkTitle>
							<FooterLink to="/signin">Submit Video</FooterLink>
							<FooterLink to="/signin">Ambassadors</FooterLink>
							<FooterLink to="/signin">Agency</FooterLink>
							<FooterLink to="/signin">Influencer</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Social Media</FooterLinkTitle>
							<FooterLinkSocial href="https://instagram.com/ragilsg_164/" target="_">Instagram</FooterLinkSocial>
							<FooterLinkSocial href="https://github.com/pujiragil/" target="_">Github</FooterLinkSocial>
							<FooterLinkSocial href="https://t.me/Ragilsg/" target="_">Telegram</FooterLinkSocial>
							<FooterLinkSocial href="https://linkedin.com/in/pujiragil/" target="_">Linkedin</FooterLinkSocial>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>

				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={toggleHome}>
							rupia
						</SocialLogo>
						<WebsiteRights>rupia © {new Date().getFullYear()}. All rights reserved.</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href="https://instagram.com/ragilsg_164/" target="_blank" aria-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href="https://github.com/pujiragil/" target="_blank" aria-label="Github">
								<FaGithub />
							</SocialIconLink>
							<SocialIconLink href="https://t.me/Ragilsg/" target="_blank" aria-label="Telegram">
								<FaTelegram />
							</SocialIconLink>
							<SocialIconLink href="https://linkedin.com/in/pujiragil/" target="_blank" aria-label="Linkedin">
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	)
}

export default Footer