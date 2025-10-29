import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

type Props = {
  github?: string
  linkedin?: string
  size?: number | string
  className?: string
}

/**
 * SocialLinks
 *
 * Render GitHub and LinkedIn icons with links.
 * The links are optional — only provided icons will render.
 * Usage:
 * <SocialLinks github="https://github.com/yourname" linkedin="https://www.linkedin.com/in/yourname" />
 */
export default function SocialLinks({ github = 'https://github.com/', linkedin = 'https://www.linkedin.com/in/', size = 20, className = '' }: Props) {
  if (!github && !linkedin) return null

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-inherit hover:text-violet-900"
        >
          <FaGithub size={size} />
        </a>
      )}

      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-inherit hover:text-blue-700"
        >
          <FaLinkedin size={size} />
        </a>
      )}
    </div>
  )
}
