---
id: array-tests
title: Array Checks
sidebar_label: Array Checks
---

After removal of the [shipping braces](shipping-braces) the DC impedance of the arrays should be measured. To do this complete the following steps:

1. Using a SMA Torque wrench, loosen the coax cables at the underside of the 450 mK plate
2. Disconnect the coax cables from the array and spin them clear of the array modules
3. Using a multimeter measure the resistance in the following arrangements, in all of these "1" corresponds to the end of the module marked "REF", "2" is the opposite end. "C" denotes the centre pin of the SMA bulkhead and "G" is ground and can be any point on the array module. A measurement of "C1-C2" denotes the positive probe on the centre pin of the SMA bulkhead at the "REF" end and the negative probe on the centre pin of the "non-REF" bulkhead.

    a. C1-C2

    b. C1-G

    c. G-C2

    d. C2-C1

    e. C2-G

    f. G-C2

4. Reattach the coax tables to the correct array modules using a torque wrench and tighten to the clicking point of the torque wrench.
5. Tighten the coax cables on the underside of the 450 mK plate to the clicking point of the torque wrench.

The table below gives the resistances measured in Cardiff prior to shipping.

| + | - | MD-M-A | MD-M-B | MD-J-A | MD-J-B | MD-F-A | MD-F-B | 
| -- | -- | -- | --  | -- | -- | -- | -- |
| C1 | C2 | | | | | | |
| C1 | G | | | | | | |
| G | C1 | | | | | | |
| C2 | C1 | | | | | | |
| C2 | G | | | | | | |
| G | C2 | | | | | | |

The centre-to-ground impedances may be different than measured in Cardiff due to different meters using different biases. The key things to check is that there is centre-to-ground resistance and ground-to-centre impedances are not the same and that the C1-G and C2-G resistances do not add up to the C1-C2 resistance. Both of these are signs of a short, this is unlikely to have developed during shipping. The more likely case is array damage, a high resistance or open circuit in the C1-C2 measurement would show damage to the array.