World clock
===

Surely you have seen clocks installed in the offices of many companies, showing the time in different capitals of the world:
* New York,
*Moscow,
*London,
*Tokyo.

![Watches](./src/assets/watches.png)

General mechanics:

1. You fill in the “Name” and “Time Zone” fields, indicate the offset in hours relative to Greenwich and click the “Add” button.
2. The clock is automatically added and, most importantly, begins to tick, that is, seconds, minutes and hours are counted.
3. When you click on the cross next to the clock, the clock is automatically deleted, and all subscriptions - `setTimeout`, `setInterval` and others - must be cleared in the corresponding lifecycle method.

Simplifications: if it is difficult for you to implement mechanics with arrows through css - see `transform` and `rotate()`, then you can make a digital clock where only numbers are displayed in the format: HH:MM:SS.

Tips:
1. You can view the current TimezoneOffset using the `Date` object.
1. You can use the Moment.js library.