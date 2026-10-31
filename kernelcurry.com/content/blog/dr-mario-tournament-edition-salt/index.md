---
title: "Pass the SALT, NES Dr. Mario Players"
abstract: "DrMC wanted a way to measure how punishing garbage sent to a Dr. Mario player is.  So I added a SALT (Stun And Lock Time) counter and speed indicator to the NES game.  Here's what it looks like and how to play it."
date: "2026-10-30T00:00:00.000Z"
read_time: 4
image: "main.jpg"
draft: false
---
At [Game On Expo 2026](https://gameonexpo.com), The [CTWC](https://thectwc.com/) tournament stage was set up right next to ours (I help run the [Retro Championships](https://retrochampionships.com)) and between matches I chatted with BSG4000 from [DrMC](https://twitter.com/DrMChampionship).

He explained this concept **SALT** or `Stun And Lock Time`. In competitive Dr. Mario, when your opponent lands a combo, garbage cascades down your board, leaving you frozen for a period of time.  How great would it be to actually *measure* that punishment?  Is your opponent locking you out for a few seconds, or for most of the round?

After the expo, I couldn't stop thinking about it.  How hard could it be to patch some statistics into a 36-year-old NES game?  As it turns out... it was an amazing engineering rabbit hole.

## What SALT Looks Like

{{< video src="DrMario_Tournament_SALT_Demo.mp4" poster="main.jpg" title="Dr. Mario Tournament Edition — title screen and gameplay with updated statistics" >}}

The original Dr. Mario clipboard gets replaced with a 5-row stats display:

{{< highlight text "linenos=false" >}}
     Original                    Tournament Edition

   ┌──────────────┐                ┌──────────────────────┐
   │ 1P  ══  2P   │  PLEYER        │   05  ═══════  05    │  Level
   │    LEVEL     │  LABLE         │        SALT          │  Label
   │  00      05  │  LEVEL         │  000           000   │  SALT Round
   │              │                │                      │
   │  LOW     LOW │  SPEED         │  15    SP      15    │  Speed
   └──────────────┘                └──────────────────────┘
{{< / highlight >}}


Level
: Selected virus level (00–20)

SALT
: Time spent locked out this round while garbage falls (000–G99, letters above 999)

Speed
: Starts at LOW 15 / MED 25 / HI 31 and rises by 1 every 10 pills, to a max of +49

## The Build

The patch modifies only display; not gameplay. It works on real NES hardware, FPGA consoles, flash carts, and emulators.

The IPS patch and source are available at [kernelcurry/dr-mario-tournament-edition](https://github.com/kernelcurry/dr-mario-tournament-edition).

## A Note on the Development Process

During the development of this project, LLMs were used. I want to be honest about that, because I think it's worth talking about.

I'm not a 6502 assembly expert. I make a living writing code and managing development teams, I know enough assembly to be dangerous, and I know what I want to build... but non-maskable interrupts that fit within vblank budgets while avoiding other pitfalls... That's the kind of thing that could take me many months to get right.

Instead, I went on a wild ride of NES game development archaeology, all while I was too sick to leave bed.

Tools like this don't replace understanding and you still need to know what you're building and why. But they reduce timelines of those projects you've always wanted to explore, but never had time for. Time is valuable. Being able to actually pursue a crazy side project instead of just thinking about it‽ Count me in.

## Credits

**ROM hack** by [KernelCurry](https://kernelcurry.com) | **SALT concept** from ([DrMC](https://twitter.com/DrMChampionship)) | **Hardware/ROM expertise** from [1UpRetro](https://1upretro.com)

Special thanks to [brianhuffman](https://github.com/brianhuffman/drmario) for the disassembly that made this patch possible, and to the entire DrMC community for pushing competitive Dr. Mario forward.
