---
id: recycling
title: Sub-Kelvin Coolers Recycling
sidebar_label: Sub-Kelvin Recycling
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Pump Configuration

Of the three sub-Kelvin stages in MUSCAT two—the 1-K and 450-mK stages—are cooled by continuous sorption coolers. In total there are six sorption pumps used to cool these stages with two He4 pumps used to cool the 1-K stage and two sets of He4-He3 paired pumps to cool the 450-mK stage. For each stage, the pumps are divided into two subsystems (refereed to as A and B). This subsystems are recycled sequentially to provide continuous cooling. The following figures present a highly-simplified schematic of the configuration of each of these coolers.

<figure>
<img className='image--center' alt='Configuration of a CC4 sorption cooler' src={useBaseUrl('img/CC4_config.png')} width='50%' />
<figcaption>CC4 Sorption Cooler configuration</figcaption>
</figure>
<figure>
<img className='image--center' alt='Configuration of a CC7 sorption cooler' src={useBaseUrl('img/CC7_config.png')} width='50%' />
<figcaption>CC7 Sorption Cooler configuration</figcaption>
</figure>

## Input Parameters

The recycling of the coolers is controlled by a state machine scripted in LabView. This state machine has two sets of input parameters each contained in a human-readable `.ini` file.

### Hardware Configuration Parameters
The first set of parameters is the physical channel IDs of the various heaters and temperature sensors. This is purely dependent on hardware configuration and present no possibility for optimisation and so is not further discussed here.

### Cycle Optimisation Parameters
The second set of parameters defines values like the set temperature each pump is heated to along with the voltage used for heating and the value of the exit condition for each stage of the cycle. The complete set of parameters is listed below

| Section | Parameter | Description | Default Value | Unit | Valid Range |
| --- | --- | --- | --- | --- | --- |
| CC7 | `He4APumpSetT` | Temperature to heat He4 A pump to condense He4 | 37.0 | Kelvin | Min: 0 |
| CC7 | `He4APumpVHeat` | Voltage used to heat He4 A pump up to `He4APumpSetT` | 24.0 | Volts | Min:&nbsp;0, Max:&nbsp;24 |
| CC7 | `He4APumpVHold` | Voltage used to hold He4 A pump at approximately `He4APumpSetT` during condensation | 3.5 | Volts | Min:&nbsp;0, Max:&nbsp;24 |
| CC7 | `He4AHSVOn` | Voltage to turn on (close) heat switch for He4 A pump | 3.5 | Volts | Min: 0, Max: 5 |
| CC7 | `He4AHSVOff` | Voltage to apply while heat switch for He4 A pump is off (open) | 0 | Volts | Min: 0, Max: 5 |
| CC7 | `He3APumpSetT` | Temperature to heat He3 A pump to condense He3 | 35.0 | Kelvin | Min: 0 |
| CC7 | `He3APumpVHeat` | Voltage used to heat He3 A pump up to `He3APumpSetT` | 24.0 | Volts | Min:&nbsp;0, Max:&nbsp;24 |
| CC7 | `He3APumpVHold` | Voltage used to hold He3 A pump at approximately `He3APumpSetT` during condensation | 3.5 | Volts | Min:&nbsp;0, Max:&nbsp;24 |
| CC7 | `He3AHSVOn` | Voltage to turn on (close) heat switch for He3 A pump | 3.5 | Volts | Min: 0, Max: 5 |
| CC7 | `He3AHSVOff` | Voltage to apply while heat switch for He3 A pump is off (open) | 0 | Volts | Min: 0, Max: 5 |
| CC7 | `He3ASoftStartV` | Voltage used to preheat He3 A pump during heating of He4 A pump | 0 | Volts | Min: 0, Max: 24 |
| CC7 | `He4BPumpSetT` | Temperature to heat He4 B pump to condense He4 | 37.0 | Kelvin | Min: 0 |
| CC7 | `He4BPumpVHeat` | Voltage used to heat He4 B pump up to `He4APumpSetT` | 24.0 | Volts | Min:&nbsp;0, Max:&nbsp;24 |
| CC7 | `He4BPumpVHold` | Voltage used to hold He4 B pump at approximately `He4APumpSetT` during condensation | 3.5 | Volts | Min:&nbsp;0, Max:&nbsp;24 |
| CC7 | `He4BHSVOn` | Voltage to turn on (close) heat switch for He4 B pump | 3.5 | Volts | Min: 0, Max: 5 |
| CC7 | `He4BHSVOff` | Voltage to apply while heat switch for He4 B pump is off (open) | 0 | Volts | Min: 0, Max: 5 |
| CC7 | `He3BPumpSetT` | Temperature to heat He3 B pump to condense He3 | 35.0 | Kelvin | Min: 0 |
| CC7 | `He3BPumpVHeat` | Voltage used to heat He3 B pump up to `He3APumpSetT` | 24.0 | Volts | Min:&nbsp;0, Max:&nbsp;24 |
| CC7 | `He3BPumpVHold` | Voltage used to hold He3 B pump at approximately `He3APumpSetT` during condensation | 5.0 | Volts | Min:&nbsp;0, Max:&nbsp;24 |
| CC7 | `He3BHSVOn` | Voltage to turn on (close) heat switch for He3 B pump | 3.5 | Volts | Min: 0, Max: 5 |
| CC7 | `He3BHSVOff` | Voltage to apply while heat switch for He3 B pump is off (open) | 0 | Volts | Min: 0, Max: 5 |
| CC7 | `He3BSoftStartV` | Voltage used to preheat He3 B pump during heating of He4 B pump | 0 | Volts | Min: 0, Max: 24 |
| CC7 | `He4CondTemp` | Temperature below which we consider He4 to condense in the system | 4.2 | Kelvin | Min: 0 |
| CC7 | `He4CondTime` | Time to wait for He4 to condense | 480 | Seconds | Min: 0 |
| CC7 | `He3CondTemp` | Temperature below which we consider He3 to condense in the system | 3.1 | Kelvin | Min: 0 |
| CC7 | `He3CondTime` | Time to wait for He3 to condense | 480 | Seconds | Min: 0 |
| CC7 | `HSOffBelow` | Temperature below which a heat switch is considered to be off (open) | 15.0 | Kelvin | Min: 0 |
| CC7 | `TimeBetweenCycles` | Time between the end of a A/B subsystem cycle and the start of the B/A cycle | 480 | Seconds | Min: 0 |
| CC7 | `He3TimeOut` | Fall-back parameter - Maximum time to wait after pumping He4 for the head of a He3 pump to cool below `He3CondTemp` before manually advancing the cycle | 2700 | Seconds | Min: 0 |
| CC4 | `He4APumpSetT` | Temperature to heat He4 A pump to condense He4 | 47.0 | Kelvin | Min: 0 |
| CC4 | `He4APumpVHeat` | Voltage used to heat He4 A pump up to `He4APumpSetT` | 24.0 | Volts | Min:&nbsp;0, Max:&nbsp;24 |
| CC4 | `He4APumpVHold` | Voltage used to hold He4 A pump at approximately `He4APumpSetT` during condensation | 4.5 | Volts | Min:&nbsp;0, Max:&nbsp;24 |
| CC4 | `He4AHSVOn` | Voltage to turn on (close) heat switch for He4 A pump | 5.0 | Volts | Min: 0, Max: 5 |
| CC4 | `He4AHSVOff` | Voltage to apply while heat switch for He4 A pump is off (open) | 0 | Volts | Min: 0, Max: 5 |
| CC4 | `He4BPumpSetT` | Temperature to heat He4 A pump to condense He4 | 47.0 | Kelvin | Min: 0 |
| CC4 | `He4BPumpVHeat` | Voltage used to heat He4 A pump up to `He4BPumpSetT` | 24.0 | Volts | Min:&nbsp;0, Max:&nbsp;24 |
| CC4 | `He4BPumpVHold` | Voltage used to hold He4 A pump at approximately `He4BPumpSetT` during condensation | 5.0 | Volts | Min:&nbsp;0, Max:&nbsp;24 |
| CC4 | `He4BHSVOn` | Voltage to turn on (close) heat switch for He4 A pump | 5.0 | Volts | Min: 0, Max: 5 |
| CC4 | `He4BHSVOff` | Voltage to apply while heat switch for He4 A pump is off (open) | 0 | Volts | Min: 0, Max: 5 |
| CC4 | `HSOffBelow` | Temperature below which a heat switch is considered to be off (open) | 15.0 | Kelvin | Min: 0 |
| CC4 | `TimeAfterCC7BeforeCC4` | Time to wait after finishing the CC7 subsystem cycle before finishing the CC4 subsystem cycle | 0 | Seconds | Min: 0 |

### Example files
Example configuration files, based on the currently used parameters are available for download here.

-   <a href={useBaseUrl('data/Indexes_default.ini')}>Hardware Parameters</a>
-   <a href={useBaseUrl('data/Params_default.ini')}>Cycle Parameters</a>

## Cycle State Flow

The following presents a basic overview of the states used in the state-machine to recycle the coolers in MUSCAT cryostat

0.  Start with all HSs `CC*He**HSVOn`
1.  Set CC4 A HS heater `CC4He4AHSVOff`, _go to_ 2
2.  Set CC7 A He3 and He4 HS heaters to `CC7He3AHSVOff` and `CC7He4AHSVOff`, _go to_ 3
3.  _if_ CC4 He4A HS is < `CC4HSOffBelow` _go to_ 4; _else go to_ 3
4.  Apply `CC4He4APumpVHeat` to CC4 He4 A pump heater, _go to_ 5
5.  _if_ CC7 He4 A HS _AND_ CC7 He3 A HS < `CC7HSOffBelow` _go to_ 6, _else go to_ 5
6.  Apply `CC7He4APumpVHeat` to CC7 He4 A pump heater, apply `CC7He3ASoftStartV` to CC7 He3 A pump heater, _go to_ 7
7.  _if_ CC7 He4 A pump > `CC7He4APumpSetT` _go to_ 8 (once only); _if_ CC4 He4 A pump > `CC4He4APumpSetT` _go to_ 9 (once only); _if_  CC7 He4 A pump > `CC7He4APumpSetT` _AND_  CC4 He4 A pump > `CC4He4APumpSetT` _go to_ 10; _else go to_ 7
8.  Apply `CC7He4APumpVHold` to CC7 He4 A pump heater, _go to_ 7
9.  Apply `CC4He4APumpVHold` to CC4 He4 A pump heater, _go to_ 7
10. Apply `CC7He3APumpVHeat` to CC7 He3 A pump heater, _go to_ 11
11. _if_ CC7 He3 A pump > `CC7He3APumpSetT` _go to_ 12; _else go to_ 11
12. Apply `CC7He3APumpVHold`, _go to_ 13
13. _if_ CC7 He4 A head < `CC7He4CondTemp` _go to_ 14; _else go to_ 13
14. _wait_ `CC7He4CondTime` _then go to_ 15.
15. Set CC7 He4 A pump heater to 0, apply `CC7He4AHSVOn` to CC7 He4A HS heater, _go to_ 16
16. _if_ CC7 He3 A head < `CC7He3CondTemp` _go to_ 17; _else if_ time at this state > `CC7He3TimeOut` _go to_ 17; _else go to_ 16
17. _wait_ `CC7He3CondTime`, _then go to_ 18
18. Set CC7 He3 A pump heater to 0, apply `CC7He3AHSVOn` to CC7 He3A HS heater, _go to_ 19
19. _wait_ `CC4TimeAfterCC7BeforeCC4`, _then go to_ 20
20. Set CC4 He4 A pump heater to 0, apply `CC4He4AHSVOn` to CC4 He4A HS heater, _go to_ 21
21. _wait_ `CC7TimeBetweenCycles`, _then go to_ 22
22. Set CC4 B HS heater to `CC4He4BHSVOff`, _go to_ 23
23. Set CC7 B He3 and He4 HS heaters to `CC7He3BHSVOff` and `CC7He4BHSVOff`, _go to_ 24
24. _if_ CC4 He4 B HS < `CC4HSOffBelow`, _go to_ 25; _else go to_ 24
25. Apply `CC4He4BPumpVHeat` to CC4 He4 B pump heater, _go to_ 26
26. _if_ CC7 He4 B HS _AND_ CC7 He3 B HS < `CC7HSOffBelow` _go to_ 27, _else go to_ 26
27. Apply `CC7He4BPumpVHeat` to CC7 He4 B pump heater, apply `CC7He3BSoftStartV` to CC7 He3 A pump heater, _go to_ 28
28. _if_ CC7 He4 B pump > `CC7He4BPumpSetT` _go to_ 29 (once only); _if_ CC4 He4 B pump > `CC4He4BPumpSetT` _go to_ 30 (once only), _if_ CC4 He4 B pump > `CC4He4BPumpSetT` _AND_ CC7 He4 B pump > `CC7He4BPumpSetT` _go to_ 31, _else go to_ 28
29. Apply `CC7He4BPumpVHold` to CC7 He4 B pump heater, _go to_ 28
30. Apply `CC4He4BPumpVHold` to CC4 He4 B pump heater, _go to_ 28
31. Apply `CC7He3BPumpVHeat` to CC7 He3 B pump heater, _go to_ 32
32. _if_ CC7 He3 B pump > `CC7He3BPumpSetT` _go to_ 33, _else go to_ 32
33. Apply `CC7He3BPumpVHold` to CC7 He3 B pump heater, _go to_ 34
34. _if_ CC7 He4 B pump head < `CC7He4CondTemp` _go to_ 35, _else go to_ 34
35. _wait_ `CC7He4CondTime`, _then go to_ 36.
36. Set CC7 He4 B pump heater to 0, apply `CC7He4BHSVOn` to CC7 He4 B HS, _go to_ 37
37. _if_ CC7 He3 B head < `CC7He3CondTemp` _go to_ 38; _else if_ time at this state > `CC7He3TimeOut` _go to_ 38; _else go to_ 37
38. _wait_ `CC7He3CondTime`, _then go to_ 39
39. Set CC7 He3 B pump heater to 0, apply `CC7He3BHSVOn` to CC7 He3B HS heater, _go to_ 40
40. _wait_ `CC4TimeAfterCC7BeforeCC4`, _then go to_ 41
41. Set CC4 He4 B pump heater to 0, apply `CC4CC7He4BHSVOn` to CC4 He4B HS heater, _go to_ 42
42. _wait_ `CC7TimeBetweenCycles`, _then go to_ 1
