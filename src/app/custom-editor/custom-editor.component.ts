import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-custom-editor',
  templateUrl: './custom-editor.component.html',
  styleUrls: ['./custom-editor.component.scss']
})
export class CustomEditorComponent implements OnInit {

  public Editor = ClassicEditor;  // CKEditor 5 build
  public editorData = '<p>Content goes here.</p>';  // Default content for the editor

  public editorConfig = {
    licenseKey: 'WjM0NXR1VjBsUnNHTE1zYng0bWFTM0NabFBEMEtYYmdRUFRyY2NweStKRnlIb2FWZ2M0a0kxOUhvaWVkN3c9PS1NakF5TkRFd01qST0=',  // Replace with your license key

    // plugins: [
    //   // Include premium plugins (if needed, adjust according to the purchased features)
    //   'Alignment', 'Font', 'PasteFromOffice', 'Table', 'TableToolbar',
    //   'MediaEmbed', 'Image', 'ImageResize', 'ImageToolbar', 'ImageCaption', 'ImageStyle', 
    //   'Autoformat', 'BlockQuote', 'Heading', 'Link', 'List', 'Paragraph'
    // ],

    toolbar: [
      'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 
      '|', 'outdent', 'indent', '|', 'blockQuote', 'insertTable', 
      '|', 'imageUpload', 'mediaEmbed', 'undo', 'redo', 'alignment', 'fontFamily', 
      'fontSize', 'fontColor', 'fontBackgroundColor'
    ],
    
    // Additional configuration options
    image: {
      toolbar: [ 'imageStyle:full', 'imageStyle:side', '|', 'imageTextAlternative' ]
    },
    table: {
      contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
    }
  };

  ngOnInit(): void {
    try {
      console.log('Editor component initialized');
    } catch (error) {
      console.error('Error initializing editor:', error);
    }
  }

}
