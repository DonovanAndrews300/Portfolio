import React from 'react'

const Socials = [
  {
    name: 'Email',
    link: 'mailto:donovanandrews300@gmail.com'
  }, {
    name: 'Twitter',
    link: 'https://twitter.com/Donnyboy360'
  }, {
    name: 'Instagram',
    link: 'https://www.instagram.com/donny130/'
  }, {
    name: 'GitHub',
    link: 'https://github.com/DonovanAndrews300'
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/donovan-andrews-964512159/'
  }
]

const Footer = () => (
  <footer>
    <div className="container">
      <div className="grid">
        <div className="column-xs-12">
          <ul className="social">
            {Socials.map(link => (
              <li><a className="page-link" href={link.link} title={link.name} target="_blank" rel="noopener noreferrer">{link.name}</a></li>
            ))}
          </ul>
          <p className="copyright">&copy; {new Date().getFullYear()} Donovan Andrews.</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
