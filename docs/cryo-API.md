---
id: cryo-API
title: 'Cryogenics: API'
sidebar_label: 'API'
---

The MUSCAT Cryogenics Control and Logging (MC-CAL) software provides a basic API which allows users to collect key information about the current state of the cooling platform from other applications. This is designed for on-site use and only provides communication over the local network and not internet wide.

## Interface

The MC-CAL API runs via UDP communication. Sending a UDP packet to the machine running MC-CAL on port `3002` containing one of following queries will result in MC-CAL replying on the same port with the relevant data. No reply is sent on other ports or to unrecognised quires. Queries are case insensitive. Each reply will start with a [unix timestamp](https://en.wikipedia.org/wiki/Unix_time) followed by the relevant information. Replies are comma delimited.

## Query Options

| Query | Description | Example Reply |
| --- | --- | --- |
| `getTemps`, `gt`, `t` | Returns a list of the current temperature values | |
| `getChannelNames`, `getChannels`, `gc` | Returns a list of descriptive descriptive channel names in the same order as the output of `getTemps` | |
| `getStatus`, `gs` | Returns a description of the current state of the sorption refrigerator recycling | |

## Minimal Example

The following is a minimal working example of a Python script to query MC-CAL and print the response to the terminal.

```python
import socket

HOST = '10.73.2.178'
PORT = 3002

# Set up UDP (SOCK_DGRAM) socket
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.settimeout(2)  # Timeout in seconds


def query(qry):
    try:
        sock.sendto(qry.encode(), (HOST, PORT))  # .encode to convert to bytes
        reply = sock.recv(1024)  # Max buffer size = 131072 B
        if reply:
            print(reply)
    except socket.timeout:
        print('Timed Out')

```
