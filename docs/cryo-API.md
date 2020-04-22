---
id: cryo-API
title: 'Cryogenics: API'
sidebar_label: 'API'
---

The MUSCAT Cryogenics Control and Logging (MC-CAL) software provides a basic API which allows users to collect key information about the current state of the cooling platform from other applications. This is designed for on-site use and only provides communication over the local network and not internet wide.

## Interface

The MC-CAL API runs via UDP communication. Sending a UDP packet to the machine running MC-CAL on port `3002` containing one of following queries will result in MC-CAL replying on the same port with the relevant data. No reply is sent on other ports or to unrecognised quires. Queries are case insensitive. Each reply will start with a [unix timestamp](https://en.wikipedia.org/wiki/Unix_time) followed by the relevant information. Replies are comma delimited.

## Query Options

| Query | Description | Example Reply (truncated) |
| --- | --- | --- |
| `getTemps`, `gt`, `t` | Returns a list of the current temperature values | `1587558515.12,293.9883,294.5592,294.5081,...` |
| `getRaw`, `gr`, `r` | Returns a list of the raw (uncalibrated) sensor measurements | `1587560365.83,0.581563,0.580301,0.580414,...` |
| `getChannelNames`, `getChannels`, `gc` | Returns a list of descriptive channel names in the same order as the output of `getTemps` and `getRaw` | `1587558550.16,50-K PTC,50-K Plate,50-K Lid,...`|
| `getStatus`, `gs` | Returns a description of the current state of the sorption refrigerator recycling | `1587558482.77,A - Waiting to condense He4. 00:07:44 left.` |
| `numDiodes` `nd` | Returns the number of diode temperature sensors at the start of the list returned by `getTemp` | `1587559678.05,20` |
| `numRTDs`, `nRTD` | Returns the number of RTD temperature sensors at the end of the list returned by `getTemp` | `1587559193.73,12` |

## Minimal Example

The following is a minimal working example of a Python script to query MC-CAL and print the response to the terminal.

```python
import socket

HOST = '10.73.2.178'
PORT = 3002

# Set up UDP (SOCK_DGRAM) socket
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.settimeout(2)  # Timeout in seconds


def MCCAL_query(qry):
    try:
        sock.sendto(qry.encode(), (HOST, PORT))  # .encode to convert to bytes
        reply = sock.recv(1024)  # Max buffer size = 131072 B
        if reply:
            print(reply)
    except socket.timeout:
        print('Timed Out')

```

Using the above code, calling `MCCAL_query('getTemps')` would give a reply of the form `b'1587558895.68,293.9883,294.5592,294.5081,294.8287,294.0846,294.7323,294.4380,301.1023,300.6758,300.6543,301.0906,293.9906,301.0401,300.6281,301.0296,300.5700,300.9584,300.5541,300.5486,300.5172,300.0000,300.0000,300.0000,300.0000,300.0000,8.0579,6.2537,300.0000,300.0000,300.0000,300.0000,4.6586'`
