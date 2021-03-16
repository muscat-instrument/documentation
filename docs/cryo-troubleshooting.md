---
id: cryo-troubleshooting
title: 'Cryogenics: Troubleshooting'
sidebar_label: 'Troubleshooting'
---

## Diodes incorrectly ordered

### Summary

During commissioning, an issue was noted where diode ordering appears to slip during operation.

### Diagnosis

- The raw voltage of channels known to be working will read approximately 2.5 V
- Presuming the initial cooldown has been completed, the thermometers on the 50 K stage consistently read below 30 K and some other diodes read much hotter than expected.

### Treatment

1. Stop the current cycling and select "Warm to 4 K"
2. Restart the [MC-CAL](cryo-UI) program and restart cycling. If requested, confirm the heat switch is open

### Other notes

The cause is believed to be related to changes in grounding causing the I<sup>2</sup>C addressing to slip. This is not envisaged as likely during deployment. Software automatically makes sure the addressing is correct at startup.
