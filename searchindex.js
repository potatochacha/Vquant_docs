Search.setIndex({"docnames": ["README", "dataloader", "index", "main", "modules", "quant_affine", "quant_model", "quant_utils", "vmodules", "vquant_kernel"], "filenames": ["README.md", "dataloader.rst", "index.rst", "main.rst", "modules.rst", "quant_affine.rst", "quant_model.rst", "quant_utils.rst", "vmodules.rst", "vquant_kernel.rst"], "titles": ["VQuant\u91cf\u5316\u65b9\u6848", "dataloader module", "Welcome to Vquants\u2019s documentation!", "main module", "\u4ee3\u7801\u8bf4\u660e", "quant_affine", "quant_model module", "quant_utils module", "vmodules module", "vquant_kernel package"], "terms": {"conda": 0, "creat": 0, "n": [0, 9], "vquant": [0, 8], "python": 0, "3": 0, "8": [0, 8], "activ": 0, "instal": 0, "pytorch": 0, "torchvis": 0, "torchaudio": 0, "cudatoolkit": 0, "11": 0, "1": 0, "c": [0, 9], "nvidia": 0, "pip": 0, "pytorchcv": 0, "0": [0, 5, 8, 9], "51": 0, "The": [0, 5], "weight": [0, 8], "should": [0, 5, 8], "correctli": 0, "when": 0, "infer": [0, 5], "per": 0, "output": [0, 5, 8], "channel": 0, "affin": 0, "quantzat": 0, "same": 0, "zeroq": 0, "gdfq": 0, "For": 0, "all": [0, 5, 8], "result": 0, "we": 0, "onli": [0, 5], "set": [0, 5], "min": [0, 5], "max": [0, 5], "rang": [0, 5], "input": [0, 1, 5, 8], "must": [0, 5], "tensor": [0, 5, 8], "element": 0, "have": [0, 5], "ONE": 0, "clip": 0, "method": 0, "bn": 0, "base": [0, 5, 8], "from": 0, "dfq": 0, "wider": 0, "model": [0, 6, 7], "alpha": [0, 9], "under": 0, "bit": [0, 5, 8], "width": 0, "similar": 0, "aciq": 0, "first": [0, 5], "layer": [0, 8], "doe": 0, "need": [0, 5, 8, 9], "other": 0, "framework": 0, "last": 0, "fc": 0, "us": [0, 5], "8bit": 0, "lower": [0, 5], "than": [0, 1], "note": 0, "didn": 0, "t": [0, 5], "after": 0, "averag": 0, "pool": 0, "procedur": 0, "involv": 0, "ani": 0, "real": 0, "dataset": [0, 1], "inform": 0, "data": [0, 1], "free": 0, "finish": 0, "befor": 0, "without": 0, "train": [0, 8], "valid": 0, "can": [0, 5], "runtim": 0, "howev": 0, "its": 0, "test": [0, 3], "hyperparamet": 0, "fit": 0, "pm": 0, "2": 0, "error": 0, "present": 0, "manuscript": 0, "ablat": 0, "studi": 0, "reproduc": 0, "vquant\u91cf\u5316\u65b9\u6848": 2, "environ": 2, "quantiz": [2, 5, 6, 8], "rule": 2, "\u4ee3\u7801\u8bf4\u660e": 2, "dataload": [2, 4], "modul": [2, 4], "main": [2, 4], "quant_affin": [2, 4], "quant_model": [2, 4], "quant_util": [2, 4], "vmodul": [2, 4], "vquant_kernel": [2, 4], "packag": [2, 4], "submodul": 4, "fixnu": 4, "interv": 4, "content": 4, "gettestdata": 1, "imagenet": 1, "batch_siz": 1, "1024": 1, "path": [1, 7], "for_incept": 1, "fals": [1, 5, 8], "sourc": [1, 5, 6, 7, 8, 9], "get": 1, "testset": 1, "name": [1, 8], "batch": 1, "size": 1, "random": 1, "whether": [1, 5], "incept": 1, "becaus": 1, "ha": [1, 5], "299": 1, "rather": 1, "224": 1, "class": [5, 8], "asymmetricquantfunct": 5, "function": [5, 8], "given": [5, 8], "float": 5, "point": 5, "valu": [5, 8], "current": 5, "support": 5, "back": 5, "propag": 5, "\u8fd9\u91cc\u662f\u6fc0\u6d3b\u7684\u91cf\u5316\u90e8\u5206": 5, "static": 5, "backward": 5, "ctx": 5, "grad_output": 5, "defin": [5, 8], "formula": 5, "differenti": 5, "oper": [5, 8], "mode": [5, 8], "automat": 5, "thi": [5, 8], "overridden": [5, 8], "subclass": [5, 8], "It": 5, "accept": 5, "context": 5, "argument": 5, "follow": 5, "mani": 5, "forward": [5, 8], "return": 5, "none": [5, 8], "pass": [5, 8], "non": 5, "were": 5, "each": 5, "gradient": 5, "w": 5, "r": 5, "correspond": 5, "If": 5, "an": 5, "requir": 5, "grad": [5, 9], "you": 5, "just": 5, "retriev": 5, "save": 5, "dure": 5, "also": 5, "attribut": 5, "needs_input_grad": 5, "tupl": 5, "boolean": 5, "repres": 5, "e": 5, "g": [5, 9], "true": [5, 8, 9], "comput": [5, 8], "x": [5, 8, 9], "k": 5, "x_min": 5, "x_max": 5, "arg": [5, 7, 8, 9], "has_quant_weight": 5, "singl": [5, 6], "precis": [5, 6], "bound": [5, 8, 9], "jvp": [], "grad_input": [], "got": [], "respect": [], "object": [], "mark_dirti": [], "mark": [], "modifi": [], "place": [], "call": 8, "most": [], "onc": [], "insid": [], "everi": 8, "s": 9, "been": [], "ensur": [], "correct": [], "our": [], "check": [], "doesn": [], "matter": [], "modif": [], "exampl": [], "inplac": 5, "staticmethod": [], "def": [], "x_npy": [], "numpi": [], "share": [], "storag": [], "once_differenti": [], "torch": [], "requires_grad": [], "dtype": [], "doubl": [], "clone": [], "b": [], "appli": [], "would": [], "lead": [], "wrong": [], "engin": [], "know": [], "unless": [], "runtimeerror": [], "one": 8, "variabl": [], "mark_non_differenti": [], "increas": [], "effici": [], "still": [], "alwai": [], "go": [], "zero": [], "shape": [], "indic": [], "sort": [], "see": [], "func": [], "idx": [], "save_for_backward": [], "g1": [], "g2": [], "saved_tensor": [], "zeros_lik": [], "index_add_": [], "futur": [], "In": [], "access": [], "through": [], "them": 8, "user": [], "made": [], "thei": [], "weren": [], "op": [], "extend": [], "autograd": [], "more": [], "detail": [], "how": [], "y": 9, "z": [], "int": [], "out": [], "neither": [], "nor": [], "grad_out": [], "gx": [], "gy": [], "gz": [], "4": [], "d": [], "set_materialize_grad": [], "bool": 8, "materi": [], "default": [], "undefin": [], "expand": [], "full": [], "prior": [], "simplefunc": [], "No": [], "necessari": [], "handl": [], "now": [], "_": [], "induc": [], "vjp": [], "quantize_model": 6, "recurs": 6, "pretrain": 6, "int8": 6, "set_first_last_lay": 6, "disable_input_quant": [7, 8], "disable_quant": [7, 8], "enable_quant": [7, 8], "get_ckpt_filenam": 7, "epoch": 7, "get_ckpt_path": [7, 9], "get_log_filenam": 7, "set_quant": 7, "set_util_log": [7, 9], "filenam": [7, 9], "tag_info": 7, "activationquant": 8, "wbit": 8, "abit": 8, "perform": 8, "although": 8, "recip": 8, "within": 8, "instanc": 8, "afterward": 8, "instead": 8, "sinc": 8, "former": 8, "take": 8, "care": 8, "run": 8, "regist": 8, "hook": 8, "while": 8, "latter": 8, "silent": 8, "ignor": 8, "conv2dquant": 8, "convolut": 8, "set_param": 8, "conv": 8, "linearquant": 8, "linear": 8, "129": 8, "5": 8, "128": 8, "is_sign": 8, "is_en": 8, "is_input": 8, "adaptive_round": [5, 8], "n_min": [5, 8], "n_max": [5, 8], "convert_tensor": 8, "tensor_forward": 8, "image_s": 8, "updata_packed_el": 8, "updata_sign": 8, "tensorquant": 8, "kwarg": [5, 8], "eh": 9, "h": 9, "uniw": 9, "sigmaw": 9, "nu": 9, "beta": 9, "n_r": 9, "n_l": 9, "distr": 9, "compute_gradi": 9, "grandtyp": 9, "cost": 9, "costtyp": 9, "h_initi": 9, "keepconvex": 9, "lbfgs_optim": 9, "p": 9, "max_iter": 9, "100": 9, "toler": 9, "1e": 9, "06": 9, "nearc": 9, "nu_plot": 9, "testnam": 9, "optim": 9, "learning_r": 9, "epsilon": 9, "nudistr": 9, "rate": 9, "updat": 9, "l": 9, "delta_nu": 9, "update_h": 9, "vround": 9, "calculate_c": 9, "calculate_c1": 9, "calculate_x": 9, "i": 9, "j": 9, "side": 9, "calculate_x_j": 9, "calculate_onesid": 9, "n_side": 9, "found0": 9, "onedimc": 9, "plot_lines_xj": 9, "co": 9, "file": 9, "xlabl": 9, "ylabl": 9, "show": 9, "asymmetric_linear_quantization_param": 5, "num_bit": 5, "saturation_min": 5, "saturation_max": 5, "integral_zero_point": 5, "sign": 5, "scale": 5, "factor": 5, "zeropoint": 5, "upper": 5, "clamp": 5, "linear_dequant": 5, "zero_point": 5, "map": 5, "integ": 5, "fix": 5, "zero_pint": 5, "shift": 5, "linear_quant": 5, "\u91cf\u5316\u53c2\u6570\u8bbe\u7f6e": 5, "quantized_model_": 3, "\u6267\u884c\u6587\u4ef6": 3}, "objects": {"": [[1, 0, 0, "-", "dataloader"], [5, 0, 0, "-", "quant_affine"], [6, 0, 0, "-", "quant_model"], [7, 0, 0, "-", "quant_utils"], [3, 1, 1, "", "test"], [8, 0, 0, "-", "vmodules"], [9, 0, 0, "-", "vquant_kernel"], [3, 1, 1, "id0", "\u6267\u884c\u6587\u4ef6"]], "dataloader": [[1, 1, 1, "", "getTestData"]], "quant_affine": [[5, 2, 1, "", "AsymmetricQuantFunction"], [5, 1, 1, "", "adaptive_round"], [5, 1, 1, "", "asymmetric_linear_quantization_params"], [5, 1, 1, "", "clamp"], [5, 1, 1, "", "linear_dequantize"], [5, 1, 1, "", "linear_quantize"]], "quant_affine.AsymmetricQuantFunction": [[5, 3, 1, "", "backward"], [5, 3, 1, "", "forward"]], "quant_model": [[6, 1, 1, "", "quantize_model"], [6, 1, 1, "", "set_first_last_layer"]], "quant_utils": [[7, 1, 1, "", "disable_input_quantization"], [7, 1, 1, "", "disable_quantization"], [7, 1, 1, "", "enable_quantization"], [7, 1, 1, "", "get_ckpt_filename"], [7, 1, 1, "", "get_ckpt_path"], [7, 1, 1, "", "get_log_filename"], [7, 1, 1, "", "set_quantizer"], [7, 1, 1, "", "set_util_logging"], [7, 1, 1, "", "tag_info"]], "vmodules": [[8, 2, 1, "", "ActivationQuantizer"], [8, 2, 1, "", "Conv2dQuantizer"], [8, 2, 1, "", "LinearQuantizer"], [8, 2, 1, "", "Quantizer"], [8, 2, 1, "", "TensorQuantizer"]], "vmodules.ActivationQuantizer": [[8, 3, 1, "", "forward"], [8, 4, 1, "", "training"]], "vmodules.Conv2dQuantizer": [[8, 3, 1, "", "forward"], [8, 3, 1, "", "set_param"], [8, 4, 1, "", "training"]], "vmodules.LinearQuantizer": [[8, 3, 1, "", "forward"], [8, 3, 1, "", "set_param"], [8, 4, 1, "", "training"]], "vmodules.Quantizer": [[8, 3, 1, "", "adaptive_round"], [8, 3, 1, "", "convert_tensor"], [8, 3, 1, "", "disable_input_quantization"], [8, 3, 1, "", "disable_quantization"], [8, 3, 1, "", "enable_quantization"], [8, 3, 1, "", "tensor_forward"], [8, 4, 1, "", "training"], [8, 3, 1, "", "updata_packed_element"], [8, 3, 1, "", "updata_signed"]], "vmodules.TensorQuantizer": [[8, 3, 1, "", "forward"], [8, 4, 1, "", "training"]], "vquant_kernel": [[9, 0, 0, "-", "fixnu"], [9, 0, 0, "-", "interval"]], "vquant_kernel.fixnu": [[9, 1, 1, "", "Eh"], [9, 1, 1, "", "G"], [9, 1, 1, "", "compute_gradient"], [9, 1, 1, "", "cost"], [9, 1, 1, "", "get_ckpt_path"], [9, 1, 1, "", "h_initial"], [9, 1, 1, "", "keepconvex"], [9, 1, 1, "", "lbfgs_optimizer"], [9, 1, 1, "", "nearC"], [9, 1, 1, "", "nu_plot"], [9, 1, 1, "", "optimize"], [9, 1, 1, "", "set_util_logging"], [9, 1, 1, "", "update"], [9, 1, 1, "", "update_h"], [9, 1, 1, "", "vround"]], "vquant_kernel.interval": [[9, 1, 1, "", "calculate_C"], [9, 1, 1, "", "calculate_C1"], [9, 1, 1, "", "calculate_X"], [9, 1, 1, "", "calculate_X_j"], [9, 1, 1, "", "calculate_oneside"], [9, 1, 1, "", "found0"], [9, 1, 1, "", "h_initial"], [9, 1, 1, "", "onedimC"], [9, 1, 1, "", "plot_lines_Xj"]]}, "objtypes": {"0": "py:module", "1": "py:function", "2": "py:class", "3": "py:method", "4": "py:attribute"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "function", "Python function"], "2": ["py", "class", "Python class"], "3": ["py", "method", "Python method"], "4": ["py", "attribute", "Python attribute"]}, "titleterms": {"vquant\u91cf\u5316\u65b9\u6848": 0, "environ": 0, "quantiz": 0, "rule": 0, "dataload": 1, "modul": [1, 3, 6, 7, 8, 9], "welcom": 2, "vquant": 2, "s": 2, "document": 2, "content": [2, 9], "main": 3, "\u4ee3\u7801\u8bf4\u660e": 4, "quant_affin": 5, "quant_model": 6, "quant_util": 7, "vmodul": 8, "vquant_kernel": 9, "packag": 9, "submodul": 9, "fixnu": 9, "interv": 9}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.todo": 2, "sphinx.ext.viewcode": 1, "sphinx": 56}})