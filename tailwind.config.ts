
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Brand colors updated to match typography system
				brand: {
					black: '#0A0A0A',
					cream: '#F7F6F3',
					gray: '#E5E5E5',
					blue: '#007cba'
				},
				// Typography colors
				typography: {
					primary: 'var(--text-primary)',
					secondary: 'var(--text-secondary)',
					muted: 'var(--text-muted)',
					brand: 'var(--text-brand)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '16px',
				'3xl': '24px',
				'4xl': '32px'
			},
			fontFamily: {
				'inter': ['Inter', 'system-ui', 'sans-serif'],
				'ibm-plex': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
				'satoshi': ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
				'space-grotesk': ['Space Grotesk', 'system-ui', 'sans-serif']
			},
			fontSize: {
				'logo': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-1px', fontWeight: '900' }],
				'logo-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-1px', fontWeight: '900' }],
				'h1': ['2rem', { lineHeight: '1.1', letterSpacing: '-0.5px', fontWeight: '800' }],
				'h1-lg': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.5px', fontWeight: '800' }],
				'h2': ['1.5rem', { lineHeight: '1.2', fontWeight: '700' }],
				'h2-lg': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
				'h3': ['1.15rem', { lineHeight: '1.3', fontWeight: '600' }],
				'h3-lg': ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],
				'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
				'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
				'small': ['0.85rem', { lineHeight: '1.4', letterSpacing: '0.25px', fontWeight: '400' }],
				'nav': ['1rem', { fontWeight: '600' }],
				'footer': ['0.95rem', { fontWeight: '400' }],
				'btn': ['1rem', { letterSpacing: '0.5px', fontWeight: '700' }],
				'quote': ['1.125rem', { lineHeight: '1.5', fontWeight: '500' }]
			},
			letterSpacing: {
				'logo': '-1px',
				'h1': '-0.5px',
				'btn': '0.5px',
				'small': '0.25px'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(0, 124, 186, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(0, 124, 186, 0.6)'
					}
				},
				'kinetic-text': {
					'0%': {
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-left': 'fade-in-left 0.6s ease-out',
				'fade-in-right': 'fade-in-right 0.6s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'kinetic-text': 'kinetic-text 0.8s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
