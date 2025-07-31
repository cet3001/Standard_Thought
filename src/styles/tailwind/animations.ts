
const keyframes = {
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
  },
  'stagger-in': {
    '0%': {
      opacity: '0',
      transform: 'translateY(20px) scale(0.95)'
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0) scale(1)'
    }
  },
  'scale-in-smooth': {
    '0%': {
      opacity: '0',
      transform: 'scale(0.9)'
    },
    '100%': {
      opacity: '1',
      transform: 'scale(1)'
    }
  },
  'slide-up-fade': {
    '0%': {
      opacity: '0',
      transform: 'translateY(40px)'
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)'
    }
  },
  'draw-border': {
    '0%': {
      strokeDashoffset: '100%'
    },
    '100%': {
      strokeDashoffset: '0%'
    }
  },
  'parallax-float': {
    '0%, 100%': {
      transform: 'translateY(0px) translateX(0px)'
    },
    '33%': {
      transform: 'translateY(-10px) translateX(5px)'
    },
    '66%': {
      transform: 'translateY(5px) translateX(-3px)'
    }
  }
};

const animation = {
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out',
  'fade-in': 'fade-in 0.6s ease-out',
  'fade-in-left': 'fade-in-left 0.6s ease-out',
  'fade-in-right': 'fade-in-right 0.6s ease-out',
  'float': 'float 6s ease-in-out infinite',
  'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
  'kinetic-text': 'kinetic-text 0.8s ease-out',
  'stagger-in': 'stagger-in 0.6s ease-out',
  'scale-in-smooth': 'scale-in-smooth 0.5s ease-out',
  'slide-up-fade': 'slide-up-fade 0.7s ease-out',
  'draw-border': 'draw-border 1.2s ease-in-out',
  'parallax-float': 'parallax-float 8s ease-in-out infinite'
};

export default { keyframes, animation };
