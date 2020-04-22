---
id: cryo-API
title: 'Cryogenics: API'
sidebar_label: 'API'
---

The MUSCAT Cryogenics Control and Logging (MC-CAL) software provides a basic API which allows users to collect key information about the current state of the cooling platform from other applications. This is designed for on-site use and only provides communication over the local network and not internet wide.

## Interface

The MC-CAL API runs via UDP communication. Sending a UDP packet to the machine running MC-CAL on port `3002` containing one of following queries will result in MC-CAL replying on the same port with the relevant data. No reply is sent on other ports or to unrecognised quires. Queries are case insensitive. Each reply will start with a [unix timestamp](https://en.wikipedia.org/wiki/Unix_time) followed by the relevant information. Replies are space delimited.

## Query Options

| Query | Description | Example Reply |
| --- | --- | --- |
| `getTemps`, `gt`, `t` | Returns a list of the current temperature values | |
| `getChannelNames`, `getChannels`, `gc` | Returns a list of descriptive descriptive channel names in the same order as the output of `getTemps` | |
| `getStatus`, `gs` | Returns a description of the current state of the sorption refrigerator recycling | |
