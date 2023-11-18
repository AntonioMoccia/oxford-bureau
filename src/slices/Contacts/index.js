/**
 * @typedef {import("@prismicio/client").Content.ContactsSlice} ContactsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactsSlice>} ContactsProps
 * @param {ContactsProps}
 */
const Contacts = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contacts (variation: {slice.variation}) Slices
    </section>
  );
};

export default Contacts;
