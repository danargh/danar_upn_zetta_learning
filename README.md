# Angular Day 4 : Membuat Report Component Lifecycle

Saya telah membuat report untuk menganalisis proses hidup component melalui console browser.

# QUIZ

1. terdapat dua kasus ngOnInit :
   a. Initialisasi directive atau komponen setelah angular pertamakali menampilkan properti data
   b. Mengatur directive atau properti input komponen
2. ngOnInit dipanggil pada saat :
   a. dipanggil setelah ngOnChanges (jika terdapat onChanges)
   b. dipanggil walaupun tidak ada onChanges
3. ngAfterViewInit dipanggil pada saat setelah ngAfterContentChecked
4. ngOnChanges dipanggil pada saat sebelum ngOnInit (jika terdapat perubahan pada input)
5. Urutan hooks lifecycle :
   1. ngOnChanges
   2. ngOnInit
   3. ngDoCheck
   4. ngAFterContentInit
   5. ngAfterContentChecked
   6. ngAfterViewInit
   7. ngAfterViewChecked
