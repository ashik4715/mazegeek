Introduction
============

This is the documentation for Twig, the flexible, fast, and secure template
engine for PHP.

If you have any exposure to other text-based template languages, such as
Smarty, Django, or Jinja, you should feel right at home with Twig. It's both
designer and developer friendly by sticking to PHP's principles and adding
functionality useful for templating environments.

The key-features are...

* *Fast*: Twig compiles templates down to plain optimized PHP code. The
  overhead compared to regular PHP code was reduced to the very minimum.

* *Secure*: Twig has a sandbox mode to evaluate untrusted template code. This
  allows Twig to be used as a template language for applications where users
  may modify the template design.

* *Flexible*: Twig is powered by a flexible lexer and parser. This allows the
  developer to define their own custom tags and filters, and to create their own DSL.

Twig is used by many Open-Source projects like Symfony, Drupal8, eZPublish,
phpBB, Piwik, OroCRM; and many frameworks have support for it as well like
Slim, Yii, Laravel, Codeigniter and Kohana — just to name a few.

Prerequisites
-------------

Twig needs at least **PHP 7.0.0** to run.

Installation
------------

The recommended way to install Twig is via Composer:

.. code-block:: bash

    composer require "twig/twig:^2.0"

Basic API Usage
---------------

This section gives you a brief introduction to the PHP API for Twig.

.. code-block:: php

    require_once '/path/to/vendor/autoload.php';

    $loader = new \Twig\Loader\ArrayLoader([
        'index' => 'Hello {{ name }}!',
    ]);
    $twig = new \Twig\Environment($loader);

    echo $twig->render('index', ['name' => 'Fabien']);

Twig uses a loader (``\Twig\Loader\ArrayLoader``) to locate templates, and an
environment (``\Twig\Environment``) to store the configuration.

The ``render()`` method loads the template passed as a first argument and
renders it with the variables passed as a second argument.

As templates are generally stored on the filesystem, Twig also comes with a
filesystem loader::

    $loader = new \Twig\Loader\FilesystemLoader('/path/to/templates');
    $twig = new \Twig\Environment($loader, [
        'cache' => '/path/to/compilation_cache',
    ]);

    echo $twig->render('index.html', ['name' => 'Fabien']);
