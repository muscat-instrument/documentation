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
