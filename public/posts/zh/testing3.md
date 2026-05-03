---
title: testing3
layout: project
date: "2026-05-03"
catogories: Arduino
---

# testing1

abcd

## testing1.1

efgh

# 硬件与软件架构

try mermaid

```mermaid
graph TD
    A[BME680 传感器] -->|I2C 总线| B(ESP32-C3 主控)
    B -->|SPI 总线| C[OLED 屏幕显示]
    B -->|Wi-Fi| D((家庭路由器))
    D --> E[Web 仪表盘]
    D --> F[Home Assistant]
    
    style B fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
```

## testing1.2

try formula

$$T_{comp} = T_{raw} \times \alpha + \beta \cdot \ln(R_{gas})$$

formula try done

<!-- tab: tab1 --> 

try coding

```python
print("Hello World")
```

<!-- tab: tab2-->

try tab2

```C++
print("Hello!")
```

genius!

<!-- tab: tab3 -->

i hope u like this template~