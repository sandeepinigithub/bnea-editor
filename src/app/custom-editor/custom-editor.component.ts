import { AfterViewInit, Component, OnInit } from '@angular/core';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeDetectorRef, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import {
	ClassicEditor,
	AccessibilityHelp,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	BlockQuote,
	Bold,
	CKBox,
	CKBoxImageEdit,
	CloudServices,
	Code,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HorizontalLine,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	Mention,
	PageBreak,
	Paragraph,
	PasteFromOffice,
	PictureEditing,
	RemoveFormat,
	SelectAll,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Style,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline,
	Undo,
	type EditorConfig
} from 'ckeditor5';

@Component({
	selector: 'app-custom-editor',
	templateUrl: './custom-editor.component.html',
	styleUrls: ['./custom-editor.component.scss']
})
export class CustomEditorComponent implements OnInit, AfterViewInit {

	// public Editor = ClassicEditor;  // CKEditor 5 build
	public editorData = '<p>Content goes here.</p>';  // Default content for the editor
	// CKBOX_TOKEN_URL = 'https://119103.cke-cs.com/token/dev/IYxOTwlhOOa7DiEocssFzpmMqllYcZ2HDMpR?limit=10';

	// public editorConfig = {
	//   licenseKey: 'WjM0NXR1VjBsUnNHTE1zYng0bWFTM0NabFBEMEtYYmdRUFRyY2NweStKRnlIb2FWZ2M0a0kxOUhvaWVkN3c9PS1NakF5TkRFd01qST0=',  // Replace with your license key

	//   // plugins: [
	//   //   // Include premium plugins (if needed, adjust according to the purchased features)
	//   //   'Alignment', 'Font', 'PasteFromOffice', 'Table', 'TableToolbar',
	//   //   'MediaEmbed', 'Image', 'ImageResize', 'ImageToolbar', 'ImageCaption', 'ImageStyle', 
	//   //   'Autoformat', 'BlockQuote', 'Heading', 'Link', 'List', 'Paragraph'
	//   // ],

	//   toolbar: [
	//     'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 
	//     '|', 'outdent', 'indent', '|', 'blockQuote', 'insertTable', 
	//     '|', 'imageUpload', 'mediaEmbed', 'undo', 'redo', 'alignment', 'fontFamily', 
	//     'fontSize', 'fontColor', 'fontBackgroundColor'
	//   ],

	//   // Additional configuration options
	//   image: {
	//     toolbar: [ 'imageStyle:full', 'imageStyle:side', '|', 'imageTextAlternative' ]
	//   },
	//   table: {
	//     contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
	//   }
	// };



	@ViewChild('editorMenuBarElement') private editorMenuBar!: ElementRef<HTMLDivElement>;
	public isLayoutReady = false;
	public Editor = ClassicEditor;
	public config: EditorConfig = {}; // CKEditor needs the DOM tree before calculating the configuration.

	constructor(private changeDetector: ChangeDetectorRef) { }
	ngOnInit(): void {
		// const editorElement = document.querySelector('#editor') as HTMLElement;
		// ClassicEditor.create(editorElement, {
		// 	simpleUpload: {
		// 		uploadUrl: 'http://34.207.243.8:3000/api/fileUpload',  // Your server upload endpoint
		// 		headers: {
		// 			// 'X-CSRF-TOKEN': 'your-csrf-token',  // Optional
		// 			Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInVzZXJJZCI6IjY2ZjY0ODQ0NTJmNjU1NGJjN2Q4NTZjMiIsImlhdCI6MTcyODg4OTM0NX0.qjuG3axnMNjTdelH-VhG2peLx6aNJXjWoOjGDOuAhRc'  // Optional
		// 		}
		// 	}
		// })

		// 	if (editorElement) {  // Ensure the element exists
		// 		ClassicEditor.create(editorElement, {
		// 			simpleUpload: {
		// 				uploadUrl: 'http://34.207.243.8:3000/api/fileUpload',  // Your server upload endpoint
		// 				headers: {
		// 					// 'X-CSRF-TOKEN': 'your-csrf-token',  // Optional
		// 					Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInVzZXJJZCI6IjY2ZjY0ODQ0NTJmNjU1NGJjN2Q4NTZjMiIsImlhdCI6MTcyODg4OTM0NX0.qjuG3axnMNjTdelH-VhG2peLx6aNJXjWoOjGDOuAhRc'  // Optional
		// 				}
		// 			}
		// 		})
		// 			.catch(error => {
		// 				console.error(error);
		// 			});
		// 	} else {
		// 		console.error('Editor element not found.');
		// 	}
		// }
	}

	// public isLayoutReady = false;
	// public Editor = ClassicEditor;
	// public config: EditorConfig = {}; // CKEditor needs the DOM tree before calculating the configuration.
	public ngAfterViewInit(): void {
		const editorElement = document.querySelector('#editor') as HTMLElement;
		ClassicEditor.create(editorElement, {
			simpleUpload: {
				uploadUrl: 'http://34.207.243.8:3000/api/fileUpload',  // Your server upload endpoint
				headers: {
					// 'X-CSRF-TOKEN': 'your-csrf-token',  // Optional
					Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInVzZXJJZCI6IjY2ZjY0ODQ0NTJmNjU1NGJjN2Q4NTZjMiIsImlhdCI6MTcyODg4OTM0NX0.qjuG3axnMNjTdelH-VhG2peLx6aNJXjWoOjGDOuAhRc'  // Optional
				}
			}
		})

		this.config = {
			toolbar: {
				items: [
					'undo', 'redo', '|', 'insertMergeField', 'previewMergeFields', '|',
					'importWord', 'exportWord', 'exportPdf', 'formatPainter', 'caseChange',
					'findAndReplace', '|', 'heading', 'style', '|', 'fontSize', 'fontFamily',
					'fontColor', 'fontBackgroundColor', '|', 'bold', 'italic', 'underline',
					'strikethrough', 'subscript', 'superscript', 'code', 'removeFormat', '|',
					'specialCharacters', 'horizontalLine', 'pageBreak', 'link', 'insertImage',
					'insertImageViaUrl', 'ckbox', 'insertTable', 'tableOfContents', 'insertTemplate',
					'highlight', 'blockQuote', '|', 'alignment', '|', 'bulletedList',
					'numberedList', 'multiLevelList', 'todoList', 'outdent', 'indent'
				],
				shouldNotGroupWhenFull: false
			},
			plugins: [
				AccessibilityHelp, Alignment, Autoformat, AutoImage, AutoLink, Autosave,
				BlockQuote, Bold, CKBox, CKBoxImageEdit, CloudServices, Code, Essentials,
				FindAndReplace, FontBackgroundColor, FontColor, FontFamily, FontSize,
				Heading, Highlight, HorizontalLine, ImageBlock, ImageCaption, ImageInline,
				ImageInsert, ImageInsertViaUrl, ImageResize, ImageStyle, ImageTextAlternative,
				ImageToolbar, ImageUpload, Indent, IndentBlock, Italic, Link, LinkImage,
				List, ListProperties, Mention, PageBreak, Paragraph, PasteFromOffice,
				PictureEditing, RemoveFormat, SelectAll, SpecialCharacters, Strikethrough,
				Style, Subscript, Superscript, Table, TableCaption, TableCellProperties,
				TableColumnResize, TableProperties, TableToolbar, TextTransformation,
				TodoList, Underline, Undo
			],
			balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
			ckbox: {
				tokenUrl: 'https://119103.cke-cs.com/token/dev/IYxOTwlhOOa7DiEocssFzpmMqllYcZ2HDMpR?limit=10'
			},
			fontFamily: {
				supportAllValues: true
			},
			fontSize: {
				options: [10, 12, 14, 'default', 18, 20, 22],
				supportAllValues: true
			},
			heading: {
				options: [
					{
						model: 'paragraph',
						title: 'Paragraph',
						class: 'ck-heading_paragraph'
					},
					{
						model: 'heading1',
						view: 'h1',
						title: 'Heading 1',
						class: 'ck-heading_heading1'
					},
					{
						model: 'heading2',
						view: 'h2',
						title: 'Heading 2',
						class: 'ck-heading_heading2'
					},
					{
						model: 'heading3',
						view: 'h3',
						title: 'Heading 3',
						class: 'ck-heading_heading3'
					},
					{
						model: 'heading4',
						view: 'h4',
						title: 'Heading 4',
						class: 'ck-heading_heading4'
					},
					{
						model: 'heading5',
						view: 'h5',
						title: 'Heading 5',
						class: 'ck-heading_heading5'
					},
					{
						model: 'heading6',
						view: 'h6',
						title: 'Heading 6',
						class: 'ck-heading_heading6'
					}
				]
			},
			htmlSupport: {
				allow: [
					{
						name: /^.*$/,
						styles: true,
						attributes: true,
						classes: true
					}
				]
			},
			image: {
				toolbar: [
					'toggleImageCaption',
					'imageTextAlternative',
					'|',
					'imageStyle:inline',
					'imageStyle:wrapText',
					'imageStyle:breakText',
					'|',
					'resizeImage',
					'|',
					'ckboxImageEdit'
				]
			},
			initialData:
				'<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n    You\'ve successfully created a CKEditor 5 project. This powerful text editor will enhance your application, enabling rich text editing\n    capabilities that are customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n    <li>\n        <strong>Integrate into your app</strong>: time to bring the editing into your application. Take the code you created and add to your\n        application.\n    </li>\n    <li>\n        <strong>Explore features:</strong> Experiment with different plugins and toolbar options to discover what works best for your needs.\n    </li>\n    <li>\n        <strong>Customize your editor:</strong> Tailor the editor\'s configuration to match your application\'s style and requirements. Or even\n        write your plugin!\n    </li>\n</ol>\n<p>\n    Keep experimenting, and don\'t hesitate to push the boundaries of what you can achieve with CKEditor 5. Your feedback is invaluable to us\n    as we strive to improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n    <li>📝 <a href="https://orders.ckeditor.com/trial/premium-features">Trial sign up</a>,</li>\n    <li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n    <li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n    <li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n    <li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n    See this text, but the editor is not starting up? Check the browser\'s console for clues and guidance. It may be related to an incorrect\n    license key if you use premium features or another feature-related requirement. If you cannot make it work, file a GitHub issue, and we\n    will help as soon as possible!\n</p>\n',
			licenseKey: '',
			link: {
				addTargetToExternalLinks: true,
				defaultProtocol: 'https://',
				decorators: {
					toggleDownloadable: {
						mode: 'manual',
						label: 'Downloadable',
						attributes: {
							download: 'file'
						}
					}
				}
			},
			list: {
				properties: {
					styles: true,
					startIndex: true,
					reversed: true
				}
			},
			mention: {
				feeds: [
					{
						marker: '@',
						feed: [
							/* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
						]
					}
				]
			},
			menuBar: {
				isVisible: true
			},
			placeholder: 'Type or paste your content here!',
			style: {
				definitions: [
					{
						name: 'Article category',
						element: 'h3',
						classes: ['category']
					},
					{
						name: 'Title',
						element: 'h2',
						classes: ['document-title']
					},
					{
						name: 'Subtitle',
						element: 'h3',
						classes: ['document-subtitle']
					},
					{
						name: 'Info box',
						element: 'p',
						classes: ['info-box']
					},
					{
						name: 'Side quote',
						element: 'blockquote',
						classes: ['side-quote']
					},
					{
						name: 'Marker',
						element: 'span',
						classes: ['marker']
					},
					{
						name: 'Spoiler',
						element: 'span',
						classes: ['spoiler']
					},
					{
						name: 'Code (dark)',
						element: 'pre',
						classes: ['fancy-code', 'fancy-code-dark']
					},
					{
						name: 'Code (bright)',
						element: 'pre',
						classes: ['fancy-code', 'fancy-code-bright']
					}
				]
			},
			table: {
				contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
			},
		};

		configUpdateAlert(this.config);

		this.isLayoutReady = true;
		this.changeDetector.detectChanges();
	}
}

/**
 * This function exists to remind you to update the config needed for premium features.
 * The function can be safely removed. Make sure to also remove call to this function when doing so.
 */
function configUpdateAlert(config: any) {
	if ((configUpdateAlert as any).configUpdateAlertShown) {
		return;
	}

	const isModifiedByUser = (currentValue: string | undefined, forbiddenValue: string) => {
		if (currentValue === forbiddenValue) {
			return false;
		}

		if (currentValue === undefined) {
			return false;
		}

		return true;
	};

	const valuesToUpdate = [];

	(configUpdateAlert as any).configUpdateAlertShown = true;

	if (!isModifiedByUser(config.licenseKey, '<YOUR_LICENSE_KEY>')) {
		valuesToUpdate.push('LICENSE_KEY');
	}

	if (!isModifiedByUser(config.ckbox?.tokenUrl, '<YOUR_CKBOX_TOKEN_URL>')) {
		valuesToUpdate.push('CKBOX_TOKEN_URL');
	}

	if (valuesToUpdate.length) {
		window.alert(
			[
				'Please update the following values in your editor config',
				'in order to receive full access to the Premium Features:',
				'',
				...valuesToUpdate.map(value => ` - ${value}`)
			].join('\n')
		);
	}

}
