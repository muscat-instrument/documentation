---
id: tempStability
title: Temperature Stability
---

import useBaseUrl from '@docusaurus/useBaseUrl';


## Cause of Fluctuations
<img className='darkInvert image--center'
     alt='Recycling of the continuous coolers in MUSCAT causing temperature
     fluctuations'
     src={useBaseUrl('img/CCrecycling_4K.png')} /><br />

The sorption coolers used to cool the 1-K and 450-mK stages of MUSCAT provide
continuous cooling of these stages. To do this the coolers are split in to
two subsystems (A & B) which are cycled in anti-phase to each other. Sorption
cooling operate by heating a pump containing activated charcoal to release
helium gas and then condense this gas in a reservoir. Once the gas is fully
condensed the pump is cooled causing the helium to be adsorped cooling the
metal walls of the reservoir via evaporation. This operation means that at any
given time one subsystem either has its pumps hot or heating while the other is
providing cooling. It is this heating which causes fluctuations in temperature
in the 4-K plate and those at lower temperatures. The above plot shows this
fluctuation over the space of 2 hours which is more than the time
taken to cycle both subsystem sequentially.

## Magnitude of Fluctuations
To explore the magnitude of these fluctuations we look at 100 hours of
continuous temperature data measured (over 350000 measurements per sensor). This
100-hour measurement consists of 89 cycles of each of the two subsystems
(178 sequential cycles in total).

The histograms below show the variation in these measurements for three
important stages of MUSCAT, the 4-K plate (where RF amplifiers are mounted),
the 450-mK stage (which forms the final radiation shield before the detectors),
and the detector stage itself.

### 4-K Stage

<img className='darkInvert image--center'
     alt='Histogram of temperature variation for the 4-K plate over 100 hours'
     src={useBaseUrl('img/4Kstability_100hr.png')} /><br />

The 4-K plate, where the sorption pumps are mounted, is the most effected by
temperature variations. During the measurement period the average temperature
was 4.37&nbsp;K with a standard deviation of 493&nbsp;mK, a relative
fluctuation of 11&nbsp;%.

### 450-mK Stage

<img className='darkInvert image--center'
     alt='Histogram of temperature variation for the 4-K plate over 100 hours'
     src={useBaseUrl('img/450mKstability_100hr.png')} /><br />

The 450-mK plate, had an average temperature of 501.5&nbsp;mK with a standard
deviation of 14.61&nbsp;mK, a relative fluctuation of 3&nbsp;%. These
fluctuations are not predominantly due to conduction from the 4-K plate but
instead are caused by heat leak from the final reservoir which is having helium
condensed in it (not providing cooling). During this stage the reservoir's
temperature fluctuates and peaks at over 3&nbsp;K. It should be mentioned that
this stage achieves 450&nbsp;mK when the detector stage is not being cooled
it is this scenario which this stages takes it name from. However, the
miniature dilution refrigerator used to cool the detector
dissipates 324&nbsp;μW into the 450-mK stage which heats it to approximately
500&nbsp;mK.

### Detector Stage

<img className='darkInvert image--center'
     alt='Histogram of temperature variation for the 4-K plate over 100 hours'
     src={useBaseUrl('img/DetectorStability_100hr.png')} /><br />

The detector plate, had an average temperature of 132.6&nbsp;mK with a standard
deviation of 0.68&nbsp;mK, a relative fluctuation of 0.5&nbsp;%.
