import React from "react";
import "./styles.css";
import kick from "./kick.wav";
import snare from "./snare.wav";
import hat from "./hat.wav";

/*

https://tonejs.github.io/docs/13.8.25/Sampler.html

Use the Sampler instrument from ToneJS to load and play
the included drum sounds.

Time is in bars 
(i.e   0.25 = quarter note    0.125 = eighth note)

The sampler should play from the beginning when the play
button is pressed. The sampler should loop infinitely at 
its given loop length

The sampler should stop when the stop button is pressed

Just assume the tempo is 120 for now

*/

const sampleDrumTrackData = {
  loopLengthInBars: 1,

  notes: [
    {
      start: 0,
      duration: 0.125,
      note: "C1"
    },
    {
      start: 0.375,
      duration: 0.125,
      note: "C1"
    },
    {
      start: 0.875,
      duration: 0.125,
      note: "C1"
    },
    {
      start: 0.5,
      duration: 0.125,
      note: "C#1"
    },
    {
      start: 0,
      duration: 0.125,
      note: "D1"
    },
    {
      start: 0.125,
      duration: 0.125 / 2,
      note: "D1"
    },
    {
      start: 0.125 + 0.125 / 2,
      duration: 0.125 / 2,
      note: "D1"
    },
    {
      start: 0.5,
      duration: 0.125 / 3,
      note: "D1"
    },
    {
      start: 0.5 + 0.125 / 3,
      duration: 0.125 / 3,
      note: "D1"
    },
    {
      start: 0.5 + 2 * (0.125 / 3),
      duration: 0.125 / 3,
      note: "D1"
    }
  ],

  drums: {
    C1: kick,
    "C#1": snare,
    D1: hat
  }
};

export default function DrumKitSound() {
  return (
    <div className="DrumKitSound">
      <button> play </button>
      <button> stop </button>
    </div>
  );
}
