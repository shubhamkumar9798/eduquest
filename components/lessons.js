// data/lessons.js
export const LESSONS = [
  {
    slug: "refraction",
    title: "Refraction — The Bending Mystery",
    summary:
      "Learn why objects appear bent in water. Core idea: light changes speed across media.",
    cliffhanger:
      "If light can bend in water… could we trap it inside forever? Tomorrow: Total Internal Reflection.",
    concept: `
Refraction is the bending of light as it passes from one medium to another
(e.g., air to water) due to a change in speed. When light enters a denser medium,
it slows down and bends towards the normal; when it enters a rarer medium,
it speeds up and bends away. This is why a straw in water appears bent.
    `,
    type: "mcq",
    content: {
      questions: [
        {
          q: "Which phenomenon makes a straw look bent?",
          options: ["Reflection", "Refraction", "Diffraction"],
          answerIndex: 1,
        },
      ],
    },
  },
  {
    slug: "tir",
    title: "Total Internal Reflection — The Invisible Path",
    summary:
      "See how light can be guided inside glass and how optical fibers work.",
    cliffhanger:
      "If we can guide light invisibly… what happens when nature does it on its own? Next: Diamonds & Rainbows.",
    concept: `
Total Internal Reflection occurs when light travels from a denser to a rarer medium
at an angle larger than the critical angle. Instead of refracting, the light
reflects entirely back inside. TIR is the principle behind optical fibers,
diamond sparkle, and mirages.
    `,
    type: "ordering",
    content: {
      instructions:
        "Arrange the steps of total internal reflection from source to trapped path.",
      items: [
        "Light travels from denser to rarer",
        "Angle exceeds critical angle",
        "Light reflects back into denser medium",
      ],
      correctOrder: [0, 1, 2],
    },
  },
  {
    slug: "dispersion",
    title: "Dispersion — The Rainbow's Code",
    summary: "White light splits into colors — Newton's prism and wavelength basics.",
    cliffhanger:
      "If prisms break light apart, could we bend light so much it seems to vanish? Next: Lenses & Vision.",
    concept: `
Dispersion is the splitting of white light into its component colors (VIBGYOR)
when it passes through a prism. This happens because different wavelengths of light
travel at slightly different speeds in glass, causing them to bend at different angles.
Newton first explained this phenomenon.
    `,
    type: "picture",
    content: {
      instructions: "Identify the device shown (use image from assets).",
      answers: ["Prism", "Lens", "Mirror"],
      // you can use image urls in real app
    },
  },
  {
    slug: "lenses",
    title: "Lenses — Building the Eye",
    summary:
      "How convex and concave lenses form images. Applications in glasses and cameras.",
    cliffhanger:
      "What happens if we combine many lenses? Up next: Telescopes and giant eyes.",
    concept: `
Lenses are transparent optical devices with curved surfaces that refract light
to converge or diverge rays.
- Convex lenses converge light to a focus (used in magnifying glasses, cameras).
- Concave lenses diverge light (used in spectacles for myopia).
The lens formula relates focal length, object distance, and image distance.
    `,
    type: "mcq",
    content: {
      questions: [
        {
          q: "Which lens is used in a magnifying glass?",
          options: ["Concave", "Convex", "Plano"],
          answerIndex: 1,
        },
      ],
    },
  },
  {
    slug: "telescopes",
    title: "Telescopes — Seeing the Invisible",
    summary: "Using mirrors/lenses to see distant objects. Galileo's discovery story.",
    cliffhanger:
      "Telescopes reveal distant worlds. Final twist: illusions, cloaking and real-world invisibility.",
    concept: `
A telescope is an optical instrument that collects and magnifies light
from distant objects.
- Refracting telescopes use lenses.
- Reflecting telescopes use mirrors.
They work on the principle of refraction/reflection to gather more light,
making faraway objects like stars and planets visible in detail.
    `,
    type: "ordering",
    content: {
      instructions: "Arrange the optical path inside a refractor telescope.",
      items: [
        "Objective lens collects light",
        "Focuses image at eyepiece",
        "Eyepiece magnifies image",
      ],
      correctOrder: [0, 1, 2],
    },
  },
  {
    slug: "illusions",
    title: "Optical Illusions & Cloaking — Escape Twist",
    summary:
      "Mirages, bending, and the limits of cloaking — solve the final escape-style puzzle.",
    cliffhanger:
      "You completed the story — reveal how cliffhangers connected all lessons.",
    concept: `
Optical illusions trick our brain into misinterpreting what our eyes see.
They occur because the brain tries to make sense of incomplete or conflicting
visual information. Examples include mirages (due to refraction of hot air),
the Müller-Lyer illusion, and shifting patterns that appear to move but don’t.

Cloaking is a modern optical technique where materials bend light around an object,
making it appear invisible. This uses special materials called metamaterials
that can control the path of light. While perfect invisibility is still under research,
scientists have demonstrated partial cloaking in labs.
    `,
    type: "final",
    content: {
      message:
        "Final puzzle: use knowledge of refraction, TIR and dispersion to solve the escape challenge.",
    },
  },
];
