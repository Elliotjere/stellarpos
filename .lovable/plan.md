# Restaurant Hero and Supermarket Industry Page

## What will change
- Replace the restaurant page’s main image with the supplied StellarPOS restaurant photo, served as a project asset with accurate descriptive text.
- Create a dedicated `/supermarkets` page targeting supermarket owners searching for POS software in Tanzania.
- Link the new supermarket page from the Industries section and footer, and add it to the sitemap.

## Supermarket page content
- Use the SEO title **“POS System for Supermarkets in Tanzania | StellarPOS”** and a search-focused description covering checkout, barcode billing, inventory, multiple tills, branches, and profit reporting.
- Add a clear supermarket-focused opening section, benefits, feature cards, supporting supermarket imagery, common questions, pricing links, and WhatsApp demo actions.
- Cover barcode checkout, weighing-scale products, multiple tills, cashier controls, stock and expiry tracking, suppliers, loyalty, multi-branch reporting, offline selling, and daily profit reports.
- Add Service, FAQ, and breadcrumb structured data plus canonical, Open Graph, and Twitter metadata.

## Technical details
- Add `src/routes/supermarkets.tsx` using the existing industry-page structure and shared navigation, footer, pricing, and contact controls.
- Store the uploaded restaurant photo through the project asset service and import its pointer in the restaurant route.
- Generate or reuse realistic supermarket images for the new page, keeping all imagery local to the project rather than hotlinked.
- Update the supermarket entries in `Industries.tsx`, `Footer.tsx`, and `public/sitemap.xml` to point to `/supermarkets`.
- Verify both `/restaurants` and `/supermarkets` at desktop and mobile sizes, including page loading, visible images, links, metadata, and browser errors.
