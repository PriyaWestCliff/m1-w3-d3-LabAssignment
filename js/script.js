// Image sources, captions, and descriptions arrays
const images = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg', 
  'images/image4.jpg', 
  'images/image5.jpg', 
  'images/image6.jpg',
  'images/image7.jpg', 
  'images/image8.jpg', 
  'images/image9.jpg', 
  'images/image10.jpg'
];

const captionTexts = [
  'Council Meetings', 
  'City Agendas', 
  'Rehabilitation Program', 
  'Budget', 
  'Contact Us', 
  'FAQ', 
  'Contract',
  'Grant Programs', 
  'Career', 
  'Renter'
];

const descTexts = [
  'Know more about City Council Meetings', 
  'Know more about City Council Agendas', 
  'Residential Rehabilitation Program', 
  'Business Planning and Budget', 
  'Contact Us here', 
  'Frequently Asked Questions', 
  'Housing Choice Voucher Program', 
  'HUD Grant Programs', 
  'Know if you Qualify', 
  'Renter Resources'
];

const gallery = document.getElementById('photo-gallery');

// Loop to generate gallery items
for (let i = 0; i < images.length; i++) {
  const listItem = document.createElement('li');
  listItem.id = `photo${i + 1}`;
  listItem.className = 'photo';

  // Creating the image element
  const img = document.createElement('img');
  img.src = images[i];
  img.alt = captionTexts[i];
  listItem.appendChild(img);

  // Adding caption
  const caption = document.createElement('div');
  caption.className = 'caption';
  caption.textContent = captionTexts[i];
  listItem.appendChild(caption);

  // Adding description (initially hidden)
  const description = document.createElement('div');
  description.className = 'description';
  description.textContent = descTexts[i];
  listItem.appendChild(description);

  // Append the list item to the gallery
  gallery.appendChild(listItem);

  // Event listeners for showing/hiding descriptions on hover
  listItem.addEventListener('mouseenter', () => {
      description.style.visibility = 'visible';
  });
  listItem.addEventListener('mouseleave', () => {
      description.style.visibility = 'hidden';
  });
}
