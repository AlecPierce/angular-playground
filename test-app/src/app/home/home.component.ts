
({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  public isDark = false;
  ngOnInit() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    // if (window.localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //   document.documentElement.classList.add('dark');
    //   this.isDark = true;
    // } else {
    //   document.documentElement.classList.remove('dark')
    //   this.isDark = false;
    // }
  }

  public darkMode() {
    this.isDark = !this.isDark;
    console.log(this.isDark);
  }
}
