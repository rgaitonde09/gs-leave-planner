# GS Leave Planner

A static web app for GS staff to plan annual leave, sick leave, and comp time using OPM leave policy assumptions and GSA payroll-calendar timing.

## Use

Open `index.html` directly, or serve the folder locally:

```bash
python3 -m http.server 4173
```

Then visit:

```text
http://localhost:4173
```

## Sharing Plans

Use `Export .md` to download a readable markdown leave plan. That same markdown can be restored with `Import .md`.

## Policy Sources

The app cites OPM annual leave, sick leave, leave year, work schedule, holiday, and GSA payroll-calendar sources inside the UI. It is a planning aid, not an official payroll or HR submission system.
