# Sveegy

Open-source website for free svg icons

### API

```http
  GET /api/icons
```

#### Request params

| Parameter | Type     | Required     | Description                | Use order |
| :-------- | :------- | :-------     | :------------------------- | :---- |
| `id`      | `string` | No           | Icon id - `home`           | 1     |
| `ids` | `string` | No | Icon ids separated with comma - `home,cube` | 2 |
| `s` | `string` | No | Search term by which icons are filtered | 3 |
| `prettify` | `boolean` | No | Defines whether svg HTML should be prettified - default `false` | always used |
| `icon-type` | `'outline' \| 'stroke'` | Yes | Defines which type of icons to use | always used |
