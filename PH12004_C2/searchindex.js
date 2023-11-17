Search.setIndex({"docnames": ["00_schedule", "01_first_plot", "02_plotting_data", "03_functions_and_fitting", "04_more_fun_with_functions", "05_more_exercises", "99_episode_template", "c2_thurs_am", "soln_c2_ex1", "soln_c2_ex2", "soln_c2_ex3", "soln_c2_ex4", "soln_customise_plot", "soln_fibonacci", "soln_ohms_law", "soln_range"], "filenames": ["00_schedule.ipynb", "01_first_plot.ipynb", "02_plotting_data.ipynb", "03_functions_and_fitting.ipynb", "04_more_fun_with_functions.ipynb", "05_more_exercises.ipynb", "99_episode_template.ipynb", "c2_thurs_am.ipynb", "soln_c2_ex1.ipynb", "soln_c2_ex2.ipynb", "soln_c2_ex3.ipynb", "soln_c2_ex4.ipynb", "soln_customise_plot.ipynb", "soln_fibonacci.ipynb", "soln_ohms_law.ipynb", "soln_range.ipynb"], "titles": ["C2 Fun with functions and plotting", "Plotting with <code class=\"docutils literal notranslate\"><span class=\"pre\">matplotlib</span></code>", "Plotting data", "Functions and line fitting", "Functions and pseudocode", "Exercises", "Lesson Title", "Additional examples", "Solution: Distances", "Solution: The central limit theorem", "Solution: Pulse on a wire", "Solution: Estimating <span class=\"math notranslate nohighlight\">\\(g\\)</span>", "Solution: Customise the plot", "Solution:   Fibonacci function", "Solution: Ohms law", "Solution:  <code class=\"docutils literal notranslate\"><span class=\"pre\">range</span></code> function"], "terms": {"In": [0, 1, 2, 3, 4, 5, 7], "thi": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14], "session": [1, 2, 4, 7], "we": [0, 1, 2, 3, 4, 5, 7, 8, 10, 12, 14], "ll": [0, 1, 2, 3, 4, 12, 14], "look": [0, 1, 2, 3, 4, 5, 7], "how": [0, 1, 2, 3, 4, 5, 10], "us": [0, 2, 4, 5, 10, 12, 14], "python": [0, 1, 2, 3, 4, 7, 10], "read": [0, 1, 3, 4, 5], "data": [0, 1, 3, 4, 5, 7, 12], "make": [0, 3, 4, 5, 7, 10, 12], "do": [0, 1, 3, 5, 8, 10], "some": [0, 2, 3, 4, 5, 6, 7, 10], "simpl": [0, 1, 2, 3, 10], "analysi": [0, 1, 14], "The": [0, 1, 2, 3, 4, 7, 10, 12, 14], "techniqu": [0, 5], "you": [0, 1, 2, 3, 4, 5, 6, 10, 11, 12, 14], "learn": [0, 3, 7], "ar": [0, 1, 2, 3, 4, 5, 7, 8, 10, 12, 14], "directli": [0, 3, 7, 14], "applic": 0, "your": [0, 2, 3, 4, 5, 7, 9, 10, 14], "work": [0, 1, 2, 3, 4, 5, 7, 10], "experiment": [0, 1], "lab": [0, 1, 2, 5, 10], "sure": [0, 1, 5, 7], "write": [0, 1, 2, 3, 5, 7, 10], "markdown": [0, 1, 3, 4, 5, 10], "explain": 0, "code": [0, 1, 2, 3, 5, 10], "so": [0, 1, 2, 3, 4, 5, 7, 8, 10, 12, 14], "can": [0, 1, 2, 3, 4, 5, 7, 8, 10, 12, 14], "re": [0, 1, 2, 3, 4, 5, 7, 10], "later": [0, 1, 2, 3], "befor": [0, 2, 4, 7, 14], "get": [0, 1, 2, 3, 4, 7, 8, 10], "start": [0, 1, 2, 4, 5, 7, 8], "todai": [0, 1, 2], "creat": [0, 1, 2, 3, 4, 7], "new": [0, 1, 2, 3, 4, 5, 10], "folder": [0, 2], "call": [0, 1, 2, 3, 7], "insid": [0, 1, 2, 3, 4], "scientific_computing_s1": 0, "made": [0, 7, 10], "last": [0, 1, 4, 5, 7, 10], "week": 0, "onc": [0, 1, 2, 4], "ve": [0, 1, 2, 3, 4, 7, 10], "done": [0, 1, 3, 7], "jupyt": 0, "from": [0, 1, 2, 3, 5, 7, 8, 14], "anaconda": 0, "prompt": 0, "rememb": [0, 1, 2, 3, 4], "need": [0, 1, 2, 3, 4, 10], "chang": [0, 1, 2, 3, 4, 5, 10, 12], "enter": 0, "cd": 0, "d": [0, 1, 2, 4, 5, 8, 10], "c": [0, 3], "user": 0, "abc123": 0, "onedr": 0, "univers": 0, "bath": 0, "replac": [0, 4], "name": [0, 1, 2, 3, 12], "directori": 0, "notebook": [0, 1, 4], "close": [0, 10], "window": 0, "config": [1, 2, 3], "inlinebackend": [1, 2, 3], "figure_format": [1, 2, 3], "retina": [1, 2, 3], "import": [1, 2, 3, 7], "numpi": [1, 2, 3, 4], "np": [1, 2, 3, 4, 5, 8, 10, 13], "pyplot": [1, 2, 3], "plt": [1, 2, 3, 5, 7, 10, 12], "panda": [1, 3, 4, 5, 7], "pd": [1, 2, 3, 4, 7], "myst_nb": 1, "glue": 1, "rcparam": [1, 2, 3, 7, 12], "updat": [1, 2, 3, 7, 12], "font": [1, 3, 7, 12], "size": [1, 3, 5, 7, 12], "16": [1, 2, 4, 7, 15], "i": [1, 2, 3, 4, 7, 9], "nice": [1, 4, 11], "save": [1, 2, 3, 4, 10], "my": 1, "pdf": [1, 2], "file": [1, 3, 5, 7], "One": [1, 4, 10], "most": [1, 3, 4, 7], "common": [1, 2], "tool": 1, "peopl": 1, "becaus": [1, 3, 7, 10, 14], "s": [1, 2, 3, 4, 5, 7, 10, 11, 12, 14], "quick": [1, 4], "easi": [1, 2, 7], "find": [1, 3, 7, 10, 14], "an": [1, 3, 4, 5, 6, 7, 10], "averag": 1, "click": [1, 2], "button": 1, "welcom": 1, "record": 1, "measur": 1, "graph": [1, 2], "see": [1, 2, 3, 4, 7, 10, 14], "howev": [1, 3, 7, 14], "should": [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 14], "thing": [1, 2, 3, 4, 7, 9, 10], "like": [1, 3, 4, 7], "report": [1, 2, 3, 10], "poster": 1, "If": [1, 2, 3, 4, 5, 7, 10, 12, 14], "everyth": [1, 2, 3], "go": [1, 2, 3, 4, 5], "could": [1, 2, 3, 4, 10], "aren": 1, "t": [1, 2, 3, 4, 5, 10, 14], "want": [1, 2, 3, 4, 10, 12], "reproduc": 1, "scienc": 1, "when": [1, 2, 3, 4, 7, 10], "describ": [1, 3, 5], "setup": 1, "methodolog": 1, "anoth": [1, 4, 5, 7, 14], "person": 1, "abl": 1, "take": [1, 3, 4, 5, 10], "experi": 1, "did": [1, 4, 6, 7], "histor": 1, "while": [1, 3], "scientist": 1, "have": [1, 2, 3, 4, 5, 7, 10, 12], "been": [1, 3], "about": [1, 2, 3, 5, 8, 10, 14], "give": [1, 3, 4, 5, 7, 10], "detail": [1, 2, 3, 4], "ha": [1, 2, 3, 4, 5, 7], "less": [1, 8], "emphasi": 1, "tide": 1, "turn": 1, "now": [1, 2, 3, 4, 7, 10], "much": [1, 2, 4], "more": [1, 2, 3, 4, 5, 10], "place": [1, 2, 3], "research": 1, "here": [1, 2, 3, 4, 7, 12, 14], "blog": 1, "post": 1, "our": [1, 2, 3, 4, 8, 10, 14], "just": [1, 2, 3, 4, 7, 10], "hard": [1, 7], "veri": [1, 2, 4, 7], "type": [1, 2, 7, 10], "perhap": 1, "doesn": [1, 3, 4, 7], "keep": [1, 2, 4, 10], "what": [1, 3, 5, 10, 15], "It": [1, 2, 3, 4, 7, 10], "accid": 1, "without": [1, 4, 7, 12], "realis": 1, "mistak": [1, 7], "referenc": 1, "cell": [1, 3, 4, 5, 7, 10], "complet": [1, 4, 6], "result": [1, 2, 3, 4, 5, 7, 14], "isn": [1, 4, 7, 10], "problem": [1, 4, 5, 7], "2012": 1, "bank": 1, "jpmorgan": 1, "lost": 1, "6": [1, 2, 3, 4, 7, 10, 12, 13, 15], "1": [1, 2, 3, 4, 5, 7, 10, 12, 13, 14, 15], "billion": 1, "ye": 1, "dollar": 1, "due": 1, "error": [1, 2, 3, 5, 14], "first": [1, 2, 3, 4, 7, 10], "packag": [1, 2, 3, 7], "main": [1, 7], "over": 1, "next": [1, 2, 3, 4, 10], "four": 1, "year": 1, "grow": 1, "love": 1, "were": [1, 2, 4, 14], "member": 1, "own": [1, 2, 3], "famili": 1, "To": [1, 2, 3, 4, 10], "don": [1, 3, 4], "actual": [1, 2, 3, 14], "whole": [1, 4], "subpackag": 1, "short": [1, 2], "far": [1, 10], "them": [1, 2, 3, 4, 7, 10, 12], "left": [1, 4, 5], "wherev": 1, "ok": [1, 7], "all": [1, 2, 3, 5, 7, 10, 12], "top": [1, 3], "won": [1, 2, 3, 4, 7, 10], "out": [1, 2, 3, 4, 5, 7, 10], "unless": 1, "unit": [1, 2, 3, 5, 7], "same": [1, 2, 3, 4, 5, 10], "three": [1, 5], "again": [1, 3, 7], "time": [1, 2, 3, 4, 5, 7, 10], "copi": [1, 3, 4, 7], "past": [1, 3, 7], "line": [1, 2, 4, 5, 7, 14], "known": 1, "magic": 1, "command": [1, 2], "set": [1, 2, 3, 4, 6, 7, 10, 12], "output": [1, 2, 3, 4, 5, 10, 14], "resolut": 1, "e": [1, 3, 4, 5], "high": 1, "middl": 1, "come": [1, 2, 5, 10, 14], "final": [1, 2, 4, 7, 14], "default": [1, 2], "pretti": [1, 2, 3, 4], "small": [1, 10, 12], "might": [1, 11], "m": [1, 2, 3, 5, 8, 9, 10, 11, 14], "mark": [1, 7], "coursework": [1, 7], "someth": [1, 2, 3, 4, 7, 10], "though": [1, 3, 4], "two": [1, 3, 4, 10], "variabl": [1, 2, 3, 4, 7, 14], "b": 1, "contain": [1, 2, 3, 5, 7], "follow": [1, 2, 4, 5, 7], "valu": [1, 2, 3, 5, 10, 14], "arang": [1, 4], "0": [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 14, 15], "10": [1, 2, 3, 4, 5, 7, 8, 10, 12, 15], "lot": [1, 2, 3, 4], "check": [1, 2, 4, 5, 7, 8, 10, 14], "store": [1, 2], "explan": [1, 4, 5], "remind": [1, 3], "yourself": [1, 3, 7, 10], "document": [1, 5, 7], "vs": 1, "sin": 1, "pass": [1, 2, 3, 7], "x": [1, 2, 3, 4, 5, 7, 10], "y": [1, 2, 3, 5, 7, 10], "But": [1, 2, 3, 4, 10], "terribl": 1, "me": 1, "sad": 1, "axi": [1, 2, 5, 7], "label": [1, 2, 3, 5, 7], "kind": [1, 2, 3, 9], "gener": [1, 5, 7, 9], "bit": [1, 3, 4, 12], "rubbish": 1, "coupl": 1, "extra": [1, 3, 4], "step": [1, 4, 10], "fig": [1, 2, 3, 7, 10, 12], "figur": [1, 3, 4, 7, 10, 12], "figsiz": [1, 2, 3, 7, 10, 12], "ax": [1, 2, 3, 7, 10, 12], "add_subplot": [1, 2, 3, 7, 10, 12], "color": [1, 2, 3, 7, 12], "k": [1, 7], "linestyl": [1, 2, 3, 7, 12], "set_xlabel": [1, 2, 3, 7, 10, 12], "set_ylabel": [1, 2, 3, 7, 10, 12], "set_titl": [1, 10], "A": [1, 3], "show": [1, 2, 3, 7, 10, 12], "below": [1, 3, 4, 7], "walk": 1, "through": [1, 7, 10], "each": [1, 3, 4, 5], "doe": [1, 2, 3, 5, 7], "put": [1, 3, 7], "togeth": [1, 4], "one": [1, 3, 4, 10, 11, 12], "better": 1, "version": 1, "origin": 1, "part": [1, 3, 10], "bracket": [1, 3, 4, 7, 10], "argument": [1, 4, 7], "tell": [1, 2, 3, 4, 7], "inch": 1, "add": [1, 2, 3, 5, 10], "subplot": 1, "even": [1, 3, 7], "onli": [1, 3, 4, 7], "let": 1, "paramet": [1, 2, 3, 7, 12], "rather": [1, 2, 4], "than": [1, 2, 3, 4, 5, 10], "refer": 1, "layout": 1, "defin": [1, 4, 5, 10, 12], "nrow": 1, "ncol": 1, "index": [1, 2, 7, 10], "number": [1, 2, 3, 4, 5, 8, 10], "row": [1, 4], "column": [1, 4, 5], "where": [1, 3, 4, 5, 10], "upper": [1, 14], "corner": 1, "increas": [1, 5], "right": [1, 2, 4, 5, 8, 14], "split": 1, "1st": 1, "posit": [1, 3, 5], "2": [1, 2, 3, 4, 5, 7, 10, 11, 13, 14, 15], "3": [1, 2, 3, 4, 5, 7, 8, 10, 13, 14, 15], "4": [1, 2, 3, 4, 5, 7, 8, 10, 13, 15], "would": [1, 7], "lower": [1, 14], "sai": [1, 2], "arrai": [1, 2, 3, 4, 5, 10], "seem": 1, "strang": 1, "those": [1, 4], "life": [1, 2], "easier": [1, 2, 3, 4], "down": [1, 2, 4, 5], "stuff": [1, 3], "few": [1, 5, 10], "also": [1, 2, 3, 4], "notic": 1, "equal": [1, 10], "sign": 1, "unlik": [1, 7], "expect": [1, 2, 3, 4, 5, 7], "alwai": [1, 2, 4, 8], "other": [1, 2, 4, 5, 7], "option": [1, 4], "ani": [0, 1, 2, 3, 4], "order": [1, 3], "long": [1, 2, 12], "thei": [1, 7, 14], "g": 1, "black": [1, 2, 3, 7, 12], "etc": [1, 5, 7], "titl": [1, 4, 5], "note": [1, 4, 7, 10], "quickli": 1, "caption": 1, "displai": 1, "That": [1, 3], "reus": [1, 2], "abov": [1, 2, 3, 4, 7, 10], "colour": [1, 2, 12], "style": 1, "solut": [1, 2, 3, 4, 5], "subfig": 1, "environ": 1, "customis": 1, "savefig": [1, 2], "cover": [1, 2, 4, 10], "orient": 1, "program": [1, 3, 4], "matplotlib": [2, 3, 7, 12], "12": [2, 3, 4, 7, 8, 15], "got": [2, 4, 7], "download": [2, 5], "c2_ohms_fit": 2, "csv": [2, 4, 5, 7], "link": [2, 5], "doubl": 2, "moment": 2, "mai": [2, 3, 4], "spot": [2, 4], "xlsx": 2, "end": [2, 3, 11, 14], "its": [2, 3, 5], "indic": 2, "comma": [2, 4], "separ": [2, 4], "These": [2, 4, 7], "still": [2, 3, 4], "text": [2, 3, 4, 10, 11, 14], "editor": 2, "select": 2, "format": [2, 3, 8, 10, 14], "menu": 2, "dialogu": 2, "box": [2, 3], "librari": 2, "practic": [2, 3, 5], "read_csv": [2, 4, 7], "function": [2, 5, 8, 9, 10], "quit": 2, "locat": 2, "assign": 2, "case": [2, 4], "given": 2, "filenam": [2, 4], "too": [2, 3, 12], "path": 2, "broken": 2, "mean": [2, 5, 7], "current": [2, 3, 7, 12], "reason": [2, 10], "why": [2, 3, 4, 7], "had": 2, "singl": 2, "simpler": 2, "wai": [2, 3, 4, 10, 12, 14], "v": [2, 3, 5, 7, 10, 12], "i_ma": [2, 3, 7, 12], "i_unc_ma": [2, 3, 7, 12], "5": [2, 3, 4, 5, 7, 8, 10, 13, 14, 15], "20": [2, 4, 13, 15], "30": 2, "40": 2, "7": [2, 3, 4, 7, 12, 14, 15], "8": [2, 3, 4, 7, 13, 15], "9": [2, 3, 4, 7, 11, 13, 14, 15], "50": [2, 7, 8], "11": [2, 4, 7, 15], "60": [2, 7], "13": [2, 4, 7, 15], "70": [2, 3], "14": [2, 4, 7, 12, 15], "15": [2, 4, 7, 12, 15], "80": 2, "17": [2, 4, 15], "18": [2, 4, 5, 8, 15], "90": 2, "19": [2, 4, 15], "100": [2, 5, 10], "run": [2, 3, 4, 7], "Is": [2, 5], "up": [2, 3, 4, 10, 11, 14], "correctli": [2, 7], "return": [2, 3, 4, 7, 8, 10, 15], "haven": 2, "across": [2, 5], "core": [2, 7], "frame": [2, 7], "datafram": [2, 7], "similarli": 2, "slice": [2, 3, 10], "stick": [2, 7], "basic": [2, 3, 4], "voltag": [2, 3, 7, 12], "volt": 2, "milliamp": 2, "uncertainti": [2, 3, 5, 7, 14], "scratch": 2, "edit": [2, 4, 7], "dtype": [2, 7], "float64": 2, "attribut": 2, "substitut": 2, "clear": 2, "inform": [2, 3], "There": [2, 3, 4, 12], "sever": 2, "bar": [2, 5], "easili": 2, "errorbar": [2, 3, 7, 12], "yerr": [2, 3, 7, 12], "marker": [2, 3, 7, 12], "o": [2, 3, 7, 12], "markers": [2, 3, 7, 12], "none": [2, 3, 7, 12], "capsiz": [2, 3, 7, 12], "which": [2, 3, 5, 8], "correspond": 2, "shape": [2, 10, 12], "draw": [2, 3], "join": 2, "includ": [2, 3, 4, 5, 7], "markerfacecolor": [2, 3, 7, 12], "ma": [2, 3, 7, 12], "finish": 2, "touch": 2, "toward": 2, "big": 2, "enough": 2, "print": [2, 3, 8, 10, 13, 14, 15], "tick_param": [2, 3, 7, 12], "direct": [2, 3, 5, 7, 12], "length": [2, 3, 7, 12], "anyth": [2, 3, 7, 14], "prettiest": 2, "found": 2, "happi": 2, "pretty_plot": 2, "scipi": 3, "optim": 3, "curve_fit": [3, 14], "best": [3, 5, 7, 14], "ad": [0, 3, 10], "legend": [3, 7], "alreadi": [3, 4], "mini": 3, "littl": [3, 4], "sort": 3, "old": [3, 7], "input": [3, 4, 5], "def": [3, 4, 7, 8, 10], "howdi": 3, "after": [3, 7], "empti": [3, 4], "colon": 3, "everi": [3, 4], "exactli": 3, "statement": 3, "stop": 3, "written": [3, 4, 7], "useless": 3, "told": 3, "screen": [3, 4], "For": [3, 4, 7, 10], "either": [3, 4], "string": [3, 4, 7], "vicki": 3, "johnni": 3, "curli": 3, "afterward": 3, "realli": 3, "letter": 3, "len": [3, 7], "count": [3, 4], "wa": [3, 4, 7], "n_letter": 3, "idea": [3, 8], "least": 3, "squar": 3, "slope": [3, 7, 14], "intercept": [3, 7, 14], "calcul": [3, 4, 5, 14], "soul": 3, "send": [3, 4], "exampl": 3, "form": 3, "dimension": 3, "access": 3, "c3": 3, "repres": 3, "covari": 3, "matrix": 3, "cov": 3, "begin": 3, "bmatrix": 3, "sigma": [3, 5, 14], "2_m": 3, "sigma_": 3, "2_c": 3, "varianc": 3, "cours": [3, 7], "simpli": 3, "standard": [3, 5, 14], "diagon": 3, "element": [3, 4], "root": 3, "err_slop": [3, 7, 14], "sqrt": [3, 5], "float": [3, 4], "err_intercept": [3, 7, 14], "3f": [3, 7, 14], "247": 3, "297": 3, "719": 3, "734": 3, "As": 3, "being": 3, "shown": [3, 7], "self": [3, 7], "within": 3, "keyword": [3, 7, 12], "specifi": [3, 4], "distanc": 3, "handl": [3, 7], "get_legend_handles_label": [3, 7], "loc": [3, 7], "numpoint": [3, 7], "grab": 3, "sybol": 3, "second": [3, 4, 5], "revers": [3, 5], "pick": 3, "annot": [3, 7], "pm": [3, 7, 11, 14], "xy": [3, 7], "xycoord": [3, 7], "center": [3, 7], "bbox": [3, 7], "dict": [3, 7], "boxstyl": [3, 7], "round": [3, 7, 14], "fc": [3, 7], "w": [3, 7], "control": [3, 12], "goe": 3, "decim": 3, "syntax": 3, "latex": 3, "math": [3, 10], "symbol": 3, "ecolor": [3, 7], "c2": [3, 7], "thought": 3, "draft": 3, "fine": [3, 7, 10], "resist": [3, 14], "relat": 3, "ir": 3, "milli": 3, "amp": 3, "r": [3, 7], "review": 3, "materi": 3, "statist": 3, "skill": [3, 5], "propag": [3, 14], "properli": [3, 10], "answer": [3, 7, 10, 14], "meaningless": 3, "plain": 4, "english": 4, "similar": 4, "wrote": 4, "cup": 4, "tea": 4, "previou": [4, 12], "determin": [4, 7], "dive": 4, "straight": [4, 10], "try": [4, 7], "happen": 4, "deal": 4, "track": 4, "mani": 4, "perfect": 4, "understand": [4, 7], "ideal": 4, "someon": 4, "who": 4, "know": [4, 6, 10], "languag": 4, "interpret": 4, "loop": [4, 15], "somewher": 4, "hold": 4, "zero": [4, 13], "fill": [4, 12], "iter": 4, "n": [4, 5, 13, 15], "els": [4, 7, 13], "rest": 4, "correct": 4, "mathemat": 4, "000e": 13, "00": [7, 13], "300e": 13, "01": 13, "100e": 13, "400e": 13, "500e": 13, "900e": 13, "440e": 13, "02": 13, "330e": 13, "770e": 13, "870e": 13, "597e": 13, "03": 13, "584e": 13, "181e": 13, "765e": 13, "particularli": 4, "tidi": 4, "page": [0, 4, 7, 14], "plot": [4, 5, 7, 10, 11], "often": [4, 7], "readabl": 4, "fashion": 4, "section": [4, 5, 10], "lesson": 4, "principl": 4, "appli": [4, 5], "particular": 4, "integ": 4, "astyp": 4, "int": 4, "21": [4, 8], "34": 4, "55": [4, 7], "89": 4, "144": 4, "233": 4, "377": 4, "610": 4, "987": 4, "1597": 4, "2584": 4, "4181": 4, "6765": 4, "tabl": [4, 14], "10d": 4, "notat": 4, "justifi": 4, "charact": 4, "wide": 4, "switch": 4, "varieti": 4, "avail": 4, "savetxt": 4, "head": 4, "arguement": 4, "delimet": 4, "fibonacci_20": 4, "column_stack": 4, "fmt": [4, 7], "header": 4, "delimit": 4, "break": 4, "stack": [4, 7], "upcom": 4, "differ": 4, "possibl": 4, "forward": [4, 10], "back": [4, 8, 9, 10, 11, 12, 13, 14, 15], "term": 4, "n_term": 4, "obv": 4, "fib_fn": 4, "fibonacci_10": 4, "txt": 4, "Or": 4, "previous": 4, "popt": 4, "pcov": 4, "fn_n": 4, "fn_fib": 4, "anth": 4, "fibonacci_result": 4, "Be": 4, "care": 4, "warn": 4, "exist": 4, "overwritten": 4, "help": [4, 5, 10], "logic": [4, 10], "individu": 4, "Not": 5, "half": [], "rel": [], "astro": [], "semest": [], "modulu": [5, 8], "equat": [5, 8, 10], "mu": [5, 8], "log_": [5, 8], "parsec": 5, "magnitud": [5, 8], "appar": 5, "absolut": [5, 7, 8], "object": [5, 6, 7], "kpc": [5, 8], "pc": 5, "larg": [5, 8], "magellan": [5, 8], "cloud": [5, 8], "mag": [5, 8], "andromeda": [5, 8], "galaxi": 5, "778": [5, 8], "hint": 5, "system": 5, "backward": 5, "thank": 5, "ancient": 5, "greek": 5, "brighter": 5, "rearrang": 8, "dfrac": [5, 8, 14], "mu_to_d": 8, "d_to_mu": 8, "log10": 8, "d_lmc": 8, "d_lmc_kpc": 8, "1000": [5, 8], "2f": 8, "mu_andromeda": 8, "24": 8, "45": 8, "abs_mag": 8, "app_mag": 8, "abs_mag_andromeda": 8, "05": 8, "good": [5, 7, 8, 10], "nasa": 8, "extragalact": 8, "databas": 8, "slightli": [8, 14], "scientif": 8, "websit": 8, "random": 5, "normal": 5, "deviat": 5, "densiti": 5, "true": [5, 7, 10], "hist": 5, "probabl": 5, "repeat": 5, "sampl": 5, "histogram": 5, "choos": 5, "appropri": [5, 7], "bin": 5, "On": [5, 14], "gaussian": 5, "distribut": 5, "f": [5, 7], "pi": 5, "frac": 5, "sentanc": 5, "compar": [5, 14], "along": 5, "state": 5, "provid": [7, 9], "full": 9, "beyond": 5, "concept": [5, 10], "visualis": 5, "question": [5, 6, 10], "adapt": 5, "vibrat": [], "wave": 5, "optic": [], "sheet": 5, "consid": 5, "transvers": 5, "both": [5, 12], "metr": 5, "express": [5, 10], "travel": 5, "veloc": 5, "convert": 5, "displac": [5, 10], "earliest": 5, "caus": [5, 7], "reach": 5, "mm": [5, 10], "combin": 10, "4e": 10, "linspac": 10, "handi": 10, "super": 10, "complic": 10, "confus": 10, "hand": 10, "pictur": 10, "formal": 10, "perfectli": 10, "electron": 10, "book": 10, "imag": 10, "And": 10, "x_0": 10, "ax2": 10, "title_str": 10, "1f": [10, 14], "trick": 10, "exact": 10, "numer": 10, "space": [7, 10], "between": [10, 14], "instead": [7, 10], "y_val": 10, "larger": 10, "5e": 10, "00052061": 10, "00057565": 10, "00063536": 10, "00069877": 10, "00076415": 10, "00082877": 10, "0008889": 10, "00094005": 10, "00097756": 10, "00099746": 10, "greater": 10, "04040404": 10, "04141414": 10, "04242424": 10, "04343434": 10, "04444444": 10, "04545455": 10, "04646465": 10, "04747475": 10, "04848485": 10, "04949495": 10, "05050505": 10, "05151515": 10, "05252525": 10, "05353535": 10, "05454545": 10, "05555556": 10, "05656566": 10, "05757576": 10, "05858586": 10, "05959596": 10, "t_d_over_5mm": 10, "0404040404040404": 10, "04": 10, "depend": 10, "approxim": 10, "plai": 10, "around": 10, "affect": 10, "10000": 10, "estim": [], "data_2": [5, 7], "height": [5, 7], "meter": 5, "suvat": 5, "u": [5, 7], "initi": 5, "acceler": 5, "gravit": 5, "constant": 5, "method": [5, 7], "fit": [5, 7, 14], "trickier": 11, "748": 11, "112": 11, "filenotfounderror": [], "traceback": 7, "recent": 7, "mambaforg": 7, "env": 7, "teaching_st": 7, "lib": 7, "python3": 7, "site": 7, "util": [], "_decor": [], "py": 7, "211": [], "deprecate_kwarg": [], "local": 7, "_deprecate_kwarg": [], "wrapper": 7, "arg": 7, "kwarg": 7, "209": [], "210": [], "new_arg_nam": [], "new_arg_valu": [], "func": 7, "331": [], "deprecate_nonkeyword_argu": [], "decor": [], "325": [], "num_allow_arg": [], "326": [], "327": [], "msg": [], "_format_argument_list": [], "allow_arg": [], "328": [], "futurewarn": [], "329": [], "stacklevel": [], "find_stack_level": [], "330": [], "io": [], "parser": [], "reader": [], "950": [], "filepath_or_buff": [], "sep": [], "index_col": [], "usecol": [], "squeez": [], "prefix": [], "mangle_dupe_col": [], "engin": [], "true_valu": [], "false_valu": [], "skipinitialspac": [], "skiprow": [], "skipfoot": [], "na_valu": [], "keep_default_na": [], "na_filt": [], "verbos": [], "skip_blank_lin": [], "parse_d": [], "infer_datetime_format": [], "keep_date_col": [], "date_pars": [], "dayfirst": [], "cache_d": [], "chunksiz": [], "compress": [], "thousand": [], "linetermin": [], "quotechar": [], "quot": 14, "doublequot": [], "escapechar": [], "comment": [], "encod": [], "encoding_error": [], "dialect": [], "error_bad_lin": [], "warn_bad_lin": [], "on_bad_lin": [], "delim_whitespac": [], "low_memori": [], "memory_map": [], "float_precis": [], "storage_opt": [], "935": [], "kwds_default": [], "_refine_defaults_read": [], "936": [], "937": [], "946": [], "947": [], "948": [], "kwd": [], "_read": [], "605": [], "602": [], "_validate_nam": [], "604": [], "textfileread": [], "607": [], "608": [], "1442": [], "__init__": 7, "1439": [], "has_index_nam": [], "1441": [], "iohandl": [], "_engin": 7, "_make_engin": [], "1735": [], "1733": [], "mode": [], "1734": [], "get_handl": [], "1736": [], "1737": [], "1738": [], "1739": [], "1740": [], "fals": [], "1741": [], "is_text": [], "1742": [], "strict": [], "1743": [], "1744": [], "1745": [], "assert": [], "1746": [], "856": [], "path_or_buf": [], "851": [], "elif": [], "isinst": [], "str": [], "852": [], "whether": [], "open": [], "binari": [], "853": [], "support": 7, "newlin": [], "854": [], "ioarg": [], "855": [], "857": [], "858": [], "859": [], "860": [], "861": [], "862": [], "863": [], "864": [], "865": [], "errno": [], "No": [], "kei": 7, "nameerror": [], "height_m": 7, "teach": 6, "min": 6, "ask": 6, "conclud": 6, "point": [7, 12], "multipl": 12, "easiest": 12, "x11": 12, "hotpink": 12, "edg": 12, "markeredgecolor": [7, 12], "outlin": 12, "produc": 12, "circl": 12, "list": [7, 12], "star": 12, "bigger": 12, "worksheet": [7, 12, 13, 14, 15], "108": 14, "omega": 14, "rang": 13, "dynam": 5, "astrophys": 5, "exercis": [7, 8, 9, 10, 11], "er": 14, "0092": 14, "1e": 14, "moral": 14, "stori": 14, "shouldn": 14, "until": 14, "otherwis": [7, 14], "introduc": 14, "sourc": [7, 14], "excel": 14, "regress": 14, "95": 14, "confid": [7, 14], "limit": 14, "u_": 14, "l_": 14, "interv": 14, "match": 14, "usual": 14, "sigma_m": 14, "fraction": 14, "frac_res_unc": 14, "032": 14, "addit": [], "dure": 7, "group": [], "thursdai": 0, "markerfacecolour": 7, "attributeerror": 7, "1423": 7, "_preprocess_data": 7, "inner": 7, "1420": 7, "functool": 7, "wrap": 7, "1421": 7, "1422": 7, "map": 7, "sanitize_sequ": 7, "1425": 7, "bound": 7, "new_sig": 7, "bind": 7, "1426": 7, "auto_label": 7, "label_nam": 7, "1427": 7, "_ax": 7, "3502": 7, "xerr": 7, "elinewidth": 7, "barsabov": 7, "lolim": 7, "uplim": 7, "xlolim": 7, "xuplim": 7, "erroreveri": 7, "capthick": 7, "3496": 7, "_nolegend_": 7, "3498": 7, "overal": 7, "child": 7, "artist": 7, "3499": 7, "avoid": 7, "_get_lin": 7, "3500": 7, "_process_unit_info": 7, "indirect": 7, "3501": 7, "process": 7, "data_lin": 7, "base_styl": 7, "_plot_arg": 7, "3503": 7, "return_kwarg": 7, "3505": 7, "modifi": 7, "3506": 7, "_base": 7, "542": 7, "_process_plot_var_arg": 7, "tup": 7, "ambiguous_fmt_datakei": 7, "537": 7, "make_artist": 7, "j": 7, "ncx": 7, "ncy": 7, "kw": 7, "538": 7, "539": 7, "enumer": 7, "541": 7, "543": 7, "544": 7, "l": 7, "genexpr": 7, "534": 7, "535": 7, "n_dataset": 7, "351": 7, "_makelin": 7, "349": 7, "default_dict": 7, "_getdefault": 7, "350": 7, "_setdefault": 7, "seg": 7, "mline": 7, "line2d": 7, "352": 7, "_api": 7, "deprec": 7, "454": 7, "make_keyword_onli": 7, "448": 7, "name_idx": 7, "449": 7, "warn_deprec": 7, "450": 7, "sinc": 7, "obj_typ": 7, "451": 7, "position": 7, "452": 7, "becom": 7, "remov": 7, "453": 7, "__name__": 7, "393": 7, "xdata": 7, "ydata": 7, "linewidth": 7, "gapcolor": 7, "markeredgewidth": 7, "markerfacecoloralt": 7, "fillstyl": 7, "antialias": 7, "dash_capstyl": 7, "solid_capstyl": 7, "dash_joinstyl": 7, "solid_joinstyl": 7, "pickradiu": 7, "drawstyl": 7, "markeveri": 7, "389": 7, "set_markeredgewidth": 7, "391": 7, "caller": 7, "392": 7, "chanc": 7, "init": 7, "henc": 7, "_internal_upd": 7, "394": 7, "_pickradiu": 7, "395": 7, "ind_offset": 7, "1186": 7, "1179": 7, "1180": 7, "1181": 7, "properti": 7, "prenorm": 7, "1182": 7, "1183": 7, "1184": 7, "lack": 7, "maintain": 7, "backcompat": 7, "1185": 7, "_update_prop": 7, "1187": 7, "cl": 7, "unexpect": 7, "1188": 7, "prop_nam": 7, "1160": 7, "prop": 7, "errfmt": 7, "1158": 7, "getattr": 7, "set_": 7, "1159": 7, "callabl": 7, "rais": 7, "1161": 7, "1162": 7, "ret": 7, "append": 7, "1163": 7, "word": 7, "american": 7, "spell": 7, "quotat": 7, "annotation_new": 7, "df2": 7, "time_": 7, "unc_m": 7, "182": 7, "180": 7, "178": 7, "165": 7, "160": 7, "148": 7, "136": 7, "120": 7, "99": 7, "83": 7, "35": 7, "75": 7, "keyerror": 7, "base": 7, "3803": 7, "get_loc": 7, "toler": 7, "3802": 7, "casted_kei": 7, "3804": 7, "except": 7, "err": 7, "_lib": 7, "pyx": 7, "138": 7, "indexengin": 7, "hashtable_class_help": 7, "pxi": 7, "5745": 7, "hashtabl": 7, "pyobjecthasht": 7, "get_item": 7, "5753": 7, "3805": 7, "__getitem__": 7, "nlevel": 7, "_getitem_multilevel": 7, "3806": 7, "is_integ": 7, "3807": 7, "typeerror": 7, "listlik": 7, "_check_indexing_error": 7, "3808": 7, "invalidindexerror": 7, "fall": 7, "3809": 7, "3810": 7, "fix": [], "renam": 7, "old_nam": 7, "new_nam": 7, "inplac": 7, "overwrit": 7, "longer": 7, "0x1382b6cd0": [], "bad": 7, "fridai": [0, 7], "2pm": [], "12th": [], "octob": 7, "2023": 7, "0x1174a1cd0": [], "13th": [], "stuck": 7, "solv": 7, "googl": 7, "cheat": 7, "real": 7, "world": 7, "reliabl": 7, "exchang": 7, "academi": 7, "blindli": 7, "tempt": 7, "chatgrt": 7, "tend": 7, "miss": 7, "wrong": 7, "submit": 7, "class": 7, "academ": 7, "misconduct": 7, "0x14db2dcd0": [], "futur": 7, "0x13a532ca0": [], "3pm": 7, "20th": 7, "0x1178adaf0": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"c2": 0, "fun": 0, "function": [0, 3, 4, 13, 15], "plot": [0, 1, 2, 3, 12], "overview": [0, 1, 2, 3, 4, 5, 6], "setup": 0, "matplotlib": 1, "question": [1, 2, 3, 4], "object": [1, 2, 3, 4], "why": 1, "us": [1, 3, 7], "excel": [1, 2], "make": [1, 2], "good": [1, 2], "practic": 1, "exercis": [1, 2, 3, 4, 5, 6], "edit": 1, "your": 1, "kei": [1, 2, 3, 4, 6], "point": [1, 2, 3, 4, 6], "data": 2, "read": [2, 7], "panda": 2, "warn": 2, "do": [2, 4, 7], "open": 2, "thi": 2, "file": [2, 4], "column": [2, 7], "what": [2, 4, 7], "scientif": 2, "fanci": 2, "tick": 2, "mark": 2, "font": 2, "size": 2, "One": 2, "figur": 2, "one": 2, "cell": 2, "customis": [2, 12], "line": 3, "fit": 3, "defin": 3, "popt": 3, "pcov": 3, "final": 3, "equat": 3, "ohm": [3, 14], "law": [3, 14], "pseudocod": 4, "fibonacci": [4, 13], "sequenc": 4, "algorithm": 4, "turn": 4, "code": [4, 7], "rang": [4, 15], "solut": [6, 8, 9, 10, 11, 12, 13, 14, 15], "format": [4, 7], "print": 4, "statement": 4, "inform": 6, "document": 4, "write": 4, "put": 4, "all": 4, "default": 4, "valu": 4, "distanc": [5, 8], "The": [5, 6, 9], "central": [5, 9], "limit": [5, 9], "theorem": [5, 9], "puls": [5, 10], "wire": [5, 10], "lesson": 6, "titl": 6, "first": 6, "estim": [5, 11], "g": [5, 11], "differ": 14, "r": 14, "sigma_r": 14, "session": 0, "12th": [], "octob": [], "2023": [], "how": 7, "error": 7, "messag": 7, "fstring": 7, "chang": 7, "name": 7, "addit": [0, 7], "exapl": [], "shown": 0, "dure": 0, "exampl": [0, 7], "you": 7, "don": 7, "t": 7, "know": 7, "fix": 7, "chatgpt": 7, "similar": 7, "ai": 7, "tool": 7, "reus": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "nbsphinx": 4, "sphinx": 56}})