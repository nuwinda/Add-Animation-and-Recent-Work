# Easy Content Management Guide

## How to Edit Weddings (No Coding Required!)

Your wedding data is now stored in a simple JSON file that's super easy to edit:

📁 **File location:** `src/app/data/works.json`

---

## How to Add a New Wedding

Just open the JSON file and add a new entry to the array:

```json
{
  "id": 7,
  "title": "Your Wedding Title",
  "couple": "Name 1 & Name 2",
  "date": "Month Year",
  "location": "City, Country",
  "category": "Weddings",
  "description": "Your description here",
  "images": ["asset_id_1", "asset_id_2", "asset_id_3"]
}
```

### Field Explanations:
- **id**: Unique number (increment from the last wedding)
- **title**: Wedding name/theme
- **couple**: Names of the couple
- **date**: Date format (e.g., "April 2026")
- **location**: City and country
- **category**: Choose from: `Weddings`, `Pre-Wedding`, `Destination`, `Cultural`
- **description**: Story about the wedding
- **images**: Asset IDs from Figma (see below how to find them)

---

## How to Find Figma Asset IDs

1. Open your Figma file
2. Right-click on an image → **Copy link**
3. The link contains the asset ID. Example:
   ```
   figma.com/file/.../page-id?node-id=123:456
   ```
   Look for the long ID near the end of the file URL in the Assets panel

---

## How to Replace/Update a Wedding

Simply edit the values in the JSON file:
- Change title, couple name, date, description, images, etc.
- The page updates automatically!

---

## How to Delete a Wedding

Delete the entire `{ ... }` object from the array.

---

## Valid Categories

Choose one for each wedding:
- `Weddings` - Regular weddings
- `Pre-Wedding` - Engagement shoots
- `Destination` - Destination weddings
- `Cultural` - Traditional/cultural weddings

---

## Tips

✅ **DO:**
- Make sure each entry has a comma after it (except the last one)
- Use proper JSON formatting
- Keep the array brackets `[ ]` around all entries

❌ **DON'T:**
- Delete the commas between entries
- Change the structure of the JSON
- Touch the React code

---

## What Happens After You Edit?

1. Save the JSON file
2. Rebuild: `npm run build`
3. Your changes appear on the website!

If you're running development mode (`npm run dev`), changes update live automatically.
